import { skillGroups } from '../../data/portfolio.js';
import './SkillsSection.css';

/** Skills are maintained in data/portfolio.js and displayed as grouped cards. */
export default function SkillsSection() {
  return (
    <section className="section-wrap skills-section" id="skills">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">03 / Technical toolkit</span>
            <h2>Tools I’ve <span>worked with.</span></h2>
          </div>
          <p>
            A snapshot of technologies used across projects and learning work. The list
            isn’t a claim of expert-level proficiency in every tool.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article className="skill-card" key={group.title}>
              <span className="skill-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{group.title}</h3>
              <p>{group.skills}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
