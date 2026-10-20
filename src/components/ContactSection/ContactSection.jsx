import { ArrowRight, ArrowUpRight, Github } from 'lucide-react';
import './ContactSection.css';

/** Contact CTA; the AI button asks the shared portfolio assistant a starter question. */
export default function ContactSection({ onAskAboutProject }) {
  return (
    <section className="section-wrap contact-section" id="contact">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-orb" aria-hidden="true" />

          <div className="contact-copy">
            <span className="section-kicker">05 / Next steps</span>
            <h2>Have a problem<br />worth <span>solving?</span></h2>
            <p>Open to conversations around software engineering, AI engineering, and interesting projects.</p>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href="https://github.com/Anjor99" target="_blank" rel="noopener noreferrer">
              <Github size={17} /> Explore my GitHub <ArrowUpRight size={15} />
            </a>
            <button
              className="button button-secondary"
              type="button"
              onClick={() => onAskAboutProject?.('What roles and projects is Anjor interested in?')}
            >
              Ask the portfolio AI <ArrowRight size={16} />
            </button>
            <a className="contact-note contact-email" href="mailto:anjorrane112003@gmail.com">anjorrane112003@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
