import { projects } from '../../data/portfolio.js';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import './ProjectsSection.css';

/** Renders the project collection from src/data/portfolio.js. */
export default function ProjectsSection({ onAskAboutProject }) {
  return (
    <section className="section-wrap projects-section" id="work">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-kicker">01 / Selected work</span>
            <h2>Curiosity, made <span>concrete.</span></h2>
          </div>
          <p>
            A selection of projects across AI, machine learning, and software engineering.
            Honest about what’s built, what’s evolving, and what comes next.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
              onAsk={onAskAboutProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
