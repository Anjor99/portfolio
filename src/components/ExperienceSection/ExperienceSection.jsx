import { education, experience, recognition } from '../../data/portfolio.js';
import './ExperienceSection.css';

/** Timeline, education, publication, and recognition. All entries are data-driven. */
export default function ExperienceSection() {
  return (
    <section className="section-wrap experience-section" id="experience">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">04 / Experience & learning</span>
            <h2>Built through <span>experience.</span></h2>
          </div>
          <p>Experience, education, and recognition are data-driven. Edit the content file and the page renders your updates automatically.</p>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.title}-${item.date}`}>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-body">
                <div className="timeline-title-row">
                  <h3>{item.title}</h3>
                  <span className="timeline-marker" aria-hidden="true" />
                </div>
                <p className="timeline-org">
                  {item.organization}
                  {item.context && <span> · {item.context}</span>}
                </p>
                <ul className="experience-bullets">
                  {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="credentials-grid">
          <article className="credential-card">
            <span className="section-kicker">Education</span>
            <h3>{education.degree}</h3>
            <p>{education.institution}</p>
            <div className="credential-meta">
              {education.period} <span>·</span> {education.result}
            </div>
          </article>

          <article className="credential-card">
            <span className="section-kicker">Publication & recognition</span>
            <div className="recognition-list">
              {recognition.map((item) => (
                <div className="recognition-item" key={item.title}>
                  <b>{item.title}</b>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
