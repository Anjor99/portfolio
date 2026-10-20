import { useEffect, useRef, useState } from 'react';
import { Bot, MessageCircle, Send, Sparkles, X } from 'lucide-react';
import MarkdownMessage from '../MarkdownMessage/MarkdownMessage.jsx';
import './ChatWidget.css';

const starterMessage = {
  role: 'assistant',
  content: 'Hi! I’m Anjor’s portfolio assistant. Ask me about his projects, technical background, experience, or resume.',
};

const suggestedQuestions = [
  'Tell me about Anjor’s AI projects.',
  'Summarize his work experience.',
  'Can I download his resume?',
];

/** Floating chat interface. Requests go to the server-side /api/chat endpoint. */
export default function ChatWidget({ initialPrompt, onPromptConsumed }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([starterMessage]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const endOfMessagesRef = useRef(null);

  // Project-card buttons can open the chat and prefill a contextual question.
  useEffect(() => {
    if (!initialPrompt) return;
    setIsOpen(true);
    setInput(initialPrompt);
    onPromptConsumed?.();
  }, [initialPrompt, onPromptConsumed]);

  // Keep the latest message visible as the conversation grows.
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isLoading, isOpen]);

  async function sendMessage(text = input) {
    const question = text.trim();
    if (!question || isLoading) return;

    const conversation = [...messages, { role: 'user', content: question }];
    setMessages(conversation);
    setInput('');
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: conversation.slice(-8).map(({ role, content }) => ({ role, content })),
        }),
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || 'The assistant could not respond right now.');
      }

      setMessages((current) => [...current, { role: 'assistant', content: payload.reply }]);
    } catch (sendError) {
      setError(sendError.message || 'Could not reach the chat service. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendMessage();
  }

  function handleInputKeyDown(event) {
    // Enter submits; Shift+Enter inserts a line break.
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit(event);
    }
  }

  return (
    <>
      {isOpen && (
        <section className="chat-panel" aria-label="Portfolio AI assistant">
          <header className="chat-header">
            <div className="chat-avatar"><Bot size={19} /></div>
            <div className="chat-heading">
              <strong>Ask Anjor AI</strong>
              <span><i /> Portfolio assistant · Groq</span>
            </div>
            <button className="icon-button" type="button" onClick={() => setIsOpen(false)} aria-label="Close chat">
              <X size={19} />
            </button>
          </header>

          <div className="chat-messages" aria-live="polite">
            {messages.map((message, index) => (
              <div
                className={`message ${message.role}`}
                key={`${index}-${message.role}`}
              >
                {message.role === 'assistant' ? (
                  <MarkdownMessage content={message.content} />
                ) : (
                  message.content
                )}
              </div>
            ))}
            {isLoading && <div className="message assistant typing" aria-label="Assistant is typing"><span /><span /><span /></div>}
            <div ref={endOfMessagesRef} />
          </div>

          <div className="chat-suggestions" aria-label="Suggested questions">
            {suggestedQuestions.map((question) => (
              <button key={question} type="button" disabled={isLoading} onClick={() => sendMessage(question)}>
                {question}
              </button>
            ))}
          </div>

          {error && <p className="chat-error" role="status">{error}</p>}

          <form className="chat-form" onSubmit={handleSubmit}>
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder="Ask about projects, skills…"
              aria-label="Your question"
              maxLength={1200}
              rows={1}
            />
            <button className="send-button" type="submit" disabled={isLoading || !input.trim()} aria-label="Send message">
              <Send size={17} />
            </button>
          </form>
          <p className="chat-disclaimer">Answers are based on published portfolio details. Please don’t share sensitive information.</p>
        </section>
      )}

      <button
        className="chat-launcher"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close portfolio assistant' : 'Open portfolio assistant'}
      >
        {isOpen ? <X size={18} /> : <MessageCircle size={18} />}
        <span>{isOpen ? 'Close assistant' : 'Ask Anjor AI'}</span>
        {!isOpen && <Sparkles size={15} />}
      </button>
    </>
  );
}
