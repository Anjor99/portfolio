import { BriefcaseBusiness } from 'lucide-react';
import './AboutSection.css';

/** Short professional introduction and working principles. */
export default function AboutSection() {
  return (
    <section className="section-wrap about-section" id="about">
      <div className="container about-grid">
        <div className="about-heading">
          <span className="section-kicker">02 / The approach</span>
          <h2>Software first.<br />Curious about <span>what’s next.</span></h2>
          <div className="about-index">AR<span> / </span>ENGINEERING NOTES</div>
        </div>

        <div className="about-copy">
          <p className="about-lead">
            I like connecting engineering fundamentals with practical AI — designing APIs,
            experimenting with models, and turning ideas into working applications.
          </p>
          <p>
            My projects span Python backends, machine learning, computer vision, and
            early-stage LLM and agentic AI systems. I care about clear architecture,
            honest documentation, and understanding the tools I use.
          </p>
          <p>
            I’m continuing to deepen my AI engineering skills while keeping software
            engineering fundamentals at the centre of how I build.
          </p>

          <div className="principle-row">
            <span className="principle-icon"><BriefcaseBusiness size={18} /></span>
            <span><b>Practical by design</b><small>Build useful things. Learn from the real constraints.</small></span>
          </div>
        </div>
      </div>
    </section>
  );
}
