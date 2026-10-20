import { ArrowRight, ArrowUpRight, Bot, Layers3, ScanLine, ShieldCheck, Workflow } from 'lucide-react';
import './ProjectCard.css';

// Keep icon names in portfolio.js as simple strings instead of storing components in data.
const projectIcons = {
  shield: ShieldCheck,
  bot: Bot,
  scan: ScanLine,
  workflow: Workflow,
};

/**
 * Convert legacy single-action project data into the newer actions array.
 * This lets projects migrate gradually without breaking older entries.
 */
function getProjectActions(project) {
  if (Array.isArray(project.actions)) return project.actions;

  if (project.href) {
    return [{
      type: 'link',
      label: project.action || 'Open project',
      href: project.href,
      external: true,
    }];
  }

  if (project.prompt) {
    return [{
      type: 'chat',
      label: project.action || 'Ask AI about project',
      prompt: project.prompt,
    }];
  }

  return [];
}

/** A reusable project card with any number of link or chatbot actions. */
export default function ProjectCard({ project, onAsk }) {
  const Icon = projectIcons[project.icon] || Layers3;
  const actions = getProjectActions(project);

  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">PROJECT / {project.number}</span>
        <span className="project-icon" aria-hidden="true">
          <Icon size={20} strokeWidth={1.6} />
        </span>
      </div>

      <div className="project-category">{project.category}</div>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="tag-list" aria-label="Technologies used">
        {(project.stack || []).map((technology) => (
          <span className="tag" key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-card-footer">
        {project.status ? (
          <span className="status-label"><i />{project.status}</span>
        ) : <span aria-hidden="true" />}

        <div className="project-card-actions" aria-label={`${project.title} actions`}>
          {actions.map((action, index) => {
            // External links open in a new tab by default; external: false opts out.
            if (action.type === 'link' && typeof action.href === 'string' && action.href.trim()) {
              const external = action.external !== false;
              return (
                <a
                  className="project-action-link"
                  href={action.href}
                  key={`${action.label}-${index}`}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                >
                  {action.label}<ArrowUpRight size={14} aria-hidden="true" />
                </a>
              );
            }

            // Chat actions reuse the one shared chatbot in App.jsx.
            if (action.type === 'chat' && typeof action.prompt === 'string' && action.prompt.trim()) {
              return (
                <button
                  className="project-action-link"
                  type="button"
                  key={`${action.label}-${index}`}
                  onClick={() => onAsk?.(action.prompt)}
                >
                  {action.label}<ArrowRight size={14} aria-hidden="true" />
                </button>
              );
            }

            // Invalid or incomplete action data is ignored instead of rendering a broken control.
            return null;
          })}
        </div>
      </div>
    </article>
  );
}
