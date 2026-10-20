import { ArrowDownRight, ArrowUpRight, Bot, Code2, Layers3 } from 'lucide-react';
import { projects } from '../../data/portfolio.js';
import './Hero.css';

/** Intro section with a decorative code window and primary calls to action. */
export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="availability-dot" />
            SOFTWARE ENGINEERING <span className="eyebrow-cross">×</span> AI
          </div>

          <h1>Engineering ideas<br />into <span>intelligence.</span></h1>
          <p className="hero-description">
            I build practical software and AI-powered applications — from Python APIs
            and machine learning tools to LLM integrations and retrieval-based systems.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore selected work <ArrowDownRight size={17} />
            </a>
            <a
              className="button button-secondary"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              download="Anjor_Rane_Resume.pdf"
            >
              Download resume <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="hero-meta">
            <span><Code2 size={15} /> Building through code</span>
            <span className="meta-divider" aria-hidden="true" />
            <span>Based in Maharashtra, India</span>
          </div>
        </div>

        {/* Decorative code illustration; not intended to be executable code. */}
        <div className="hero-art" aria-label="Decorative code illustration">
          <div className="art-topline">
            <span>BUILD LOG <b>001</b></span>
            <span className="art-live"><i /> ITERATING</span>
          </div>

          <div className="code-card">
            <div className="code-dots">
              <i /><i /><i /><span>principles.js</span>
            </div>
            <pre><span className="code-comment">// the way I build</span>{'\n'}<span className="code-keyword">const</span> approach = {'{'}{'\n'}  <span className="code-property">focus</span>: <span className="code-string">'useful AI'</span>,{'\n'}  <span className="code-property">craft</span>: <span className="code-string">'solid software'</span>,{'\n'}  <span className="code-property">mindset</span>: <span className="code-string">'always learning'</span>{'\n'}{'}'};{'\n\n'}<span className="code-comment">// build · test · improve</span></pre>
            <div className="code-status">
              <span><i /> Ready to build</span><span>v. 01.0</span>
            </div>
          </div>

          <div className="floating-note note-top">
            <span className="note-icon"><Bot size={17} /></span>
            <span><b>AI systems</b><small>From prompt to product</small></span>
          </div>
          <div className="floating-note note-bottom">
            <span className="note-icon note-icon-dark"><Layers3 size={17} /></span>
            <span><b>Engineering first</b><small>Understand the why</small></span>
          </div>
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
        </div>
      </div>

      <div className="container hero-bottom">
        <span>SELECTED WORK <ArrowDownRight size={15} /></span>
        <span>01 — {String(projects.length).padStart(2, '0')}</span>
      </div>
    </section>
  );
}
