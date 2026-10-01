import { useEffect, useRef } from 'react';
import { displayName } from '../techNames.js';

// YAML folded text: blank lines separate paragraphs, single newlines are wraps.
function paragraphs(text = '') {
  return text
    .split(/\n\s*\n/)
    .map(p => p.replace(/\s*\n\s*/g, ' ').trim())
    .filter(Boolean);
}

export default function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);

  // Open as a modal whenever a project is set; showModal gives focus
  // trapping, Esc to close and inert background for free.
  useEffect(() => {
    const dialog = ref.current;
    if (project && dialog && !dialog.open) dialog.showModal();
    if (!project && dialog?.open) dialog.close();
  }, [project]);

  // Clicks on the backdrop land on the <dialog> element itself.
  const onBackdropClick = e => {
    if (e.target === ref.current) ref.current.close();
  };

  const body = project ? paragraphs(project.details) : [];

  return (
    <dialog
      ref={ref}
      className="dialog"
      aria-labelledby="dialog-title"
      onClose={onClose}
      onClick={onBackdropClick}
    >
      {project && (
        <div className="dialog__panel">
          <header className="dialog__header">
            <h2 id="dialog-title" className="display dialog__title">{project.title}</h2>
            <button type="button" className="dialog__close" onClick={() => ref.current.close()}>
              Close
            </button>
          </header>

          <p className="dialog__lede">{project.desc}</p>

          {body.length > 0 && (
            <div className="dialog__body">
              {body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          )}

          <dl className="dialog__meta">
            {project.languages.length > 0 && (
              <div>
                <dt>Languages</dt>
                <dd>{project.languages.map(displayName).join(', ')}</dd>
              </div>
            )}
            {project.technologies.length > 0 && (
              <div>
                <dt>Technologies</dt>
                <dd>{project.technologies.map(displayName).join(', ')}</dd>
              </div>
            )}
          </dl>

          <div className="dialog__actions">
            {project.hostedUrl && (
              <a className="btn btn--primary" href={project.hostedUrl} target="_blank" rel="noopener noreferrer">
                Live site
              </a>
            )}
            <a
              className={`btn ${project.hostedUrl ? 'btn--outline' : 'btn--primary'}`}
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View code
            </a>
          </div>
        </div>
      )}
    </dialog>
  );
}
