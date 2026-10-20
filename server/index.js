import 'dotenv/config';
import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';
import { SYSTEM_PROMPT } from './prompt.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const app = express();
const port = Number(process.env.PORT || 8000);
const rateWindowMs = 10 * 60 * 1000;
const rateLimit = 12;
const buckets = new Map();

app.disable('x-powered-by');
app.use(express.json({ limit: '16kb' }));
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  next();
});

function isRateLimited(key) {
  const now = Date.now();
  const existing = (buckets.get(key) || []).filter((timestamp) => now - timestamp < rateWindowMs);
  if (existing.length >= rateLimit) return true;
  existing.push(now);
  buckets.set(key, existing);
  if (buckets.size > 1000) {
    for (const [bucketKey, times] of buckets) {
      if (!times.length || now - times[times.length - 1] > rateWindowMs) buckets.delete(bucketKey);
    }
  }
  return false;
}

app.get('/api/health', (_req, res) => res.json({ ok: true, providerConfigured: Boolean(process.env.GROQ_API_KEY) }));

app.post('/api/chat', async (req, res) => {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: 'The AI assistant is not configured yet. The site owner must add GROQ_API_KEY to the server environment.' });
  }

  const forwardedFor = req.headers['x-forwarded-for'];
  const clientKey = String(forwardedFor || req.socket.remoteAddress || 'unknown').split(',')[0].trim().slice(0, 100);
  if (isRateLimited(clientKey)) {
    return res.status(429).json({ error: 'Too many questions in a short period. Please wait a few minutes and try again.' });
  }

  const incoming = req.body?.messages;
  if (!Array.isArray(incoming) || incoming.length < 1 || incoming.length > 8) {
    return res.status(400).json({ error: 'Send between 1 and 8 recent messages.' });
  }

  const messages = [];
  for (const message of incoming) {
    if (!message || !['user', 'assistant'].includes(message.role) || typeof message.content !== 'string' || !message.content.trim() || message.content.length > 1200) {
      return res.status(400).json({ error: 'Each message must have a valid role and contain 1–1,200 characters.' });
    }
    messages.push({ role: message.role, content: message.content.trim() });
  }
  if (messages.at(-1).role !== 'user') {
    return res.status(400).json({ error: 'The last message must be a visitor question.' });
  }

  try {
    const upstream = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'openai/gpt-oss-20b',
        temperature: 0.2,
        max_completion_tokens: 450,
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      }),
      signal: AbortSignal.timeout(25000),
    });
    const payload = await upstream.json().catch(() => ({}));
    if (!upstream.ok) {
      console.error('Groq request failed:', upstream.status);
      if (upstream.status === 401 || upstream.status === 403) return res.status(503).json({ error: 'The AI provider credentials need to be checked by the site owner.' });
      if (upstream.status === 429) return res.status(503).json({ error: 'The AI provider is temporarily rate-limited. Please try again shortly.' });
      return res.status(502).json({ error: 'The AI provider is temporarily unavailable. Please try again shortly.' });
    }
    const reply = payload.choices?.[0]?.message?.content;
    if (typeof reply !== 'string' || !reply.trim()) return res.status(502).json({ error: 'The assistant returned an empty answer. Please try again.' });
    return res.json({ reply: reply.trim() });
  } catch (error) {
    console.error('Groq request error:', error?.name || 'unknown');
    return res.status(502).json({ error: 'The assistant could not connect to its provider. Please try again shortly.' });
  }
});

const distDir = path.join(rootDir, 'dist');

if (existsSync(distDir)) {
  app.use(express.static(distDir, {
    index: false,
    maxAge: '1h',
  }));
}

// Return JSON for unknown API routes.
app.use('/api', (_req, res) => {
  res.status(404).json({
    error: 'API endpoint not found.',
  });
});

if (existsSync(distDir)) {
  // Serve the React app for frontend routes.
  app.get('*path', (req, res, next) => {
    if (req.path.startsWith('/api/')) return next();

    res.sendFile(path.join(distDir, 'index.html'));
  });
} else {
  app.get('/', (_req, res) => {
    res.status(200).send(
      'Portfolio API is running. Start Vite with `npm run dev` for the frontend.'
    );
  });
}

app.listen(port, '0.0.0.0', () => {
  console.log(`Portfolio server listening on http://localhost:${port}`);
  if (!process.env.GROQ_API_KEY) console.warn('GROQ_API_KEY is not set. Chat requests will return 503 until configured.');
});
