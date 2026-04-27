import { useState, useEffect } from 'react';
import { c } from '../content.js';

// ── Commits fetcher ──────────────────────────────────────────
function useGitHub(project) {
  const [commits, setCommits] = useState([]);
  const [commitsError, setCommitsError] = useState(null);

  useEffect(() => {
    if (!project) return;
    setCommits([]);
    setCommitsError(null);

    const TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN || '';
    const headers = TOKEN ? { Authorization: `token ${TOKEN}` } : {};

    if (project.commitsApiUrl) {
      fetch(project.commitsApiUrl, { headers })
        .then(r => { if (!r.ok) throw new Error(`GitHub ${r.status}`); return r.json(); })
        .then(data => setCommits(data.slice(0, 5)))
        .catch(e => setCommitsError(e.message));
    }
  }, [project?.id]);

  return { commits, commitsError };
}


// ── Expanded project detail ──────────────────────────────────
function ProjectDetail({ project }) {
  const { commits, commitsError } = useGitHub(project);

  return (
    <div className="row__expand-inner" style={{ paddingLeft: 48 }}>

      {/* Top meta row */}
      <div
        className="project-detail-meta"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 48,
          marginBottom: 32,
          paddingBottom: 32,
          borderBottom: '1px solid var(--rule)',
        }}
      >
        {/* Description */}
        <div>
          <span className="micro-label" style={{ display: 'block', marginBottom: 10 }}>Overview</span>
          <p style={{ fontSize: 14, color: 'var(--mid)', lineHeight: 1.75, maxWidth: 680 }}>
            {project.details || project.description}
          </p>

          {/* CTA buttons */}
          {(project.hostedUrl || project.repoUrl) && (
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {project.hostedUrl && (
                <a
                  href={project.hostedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Live Site ↗
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  GitHub →
                </a>
              )}
            </div>
          )}
        </div>

        {/* Tech stack */}
        <div style={{ minWidth: 200 }}>
          <span className="micro-label" style={{ display: 'block', marginBottom: 10 }}>Stack</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[...project.languages, ...project.technologies].map(t => (
              <span key={t} className="tag" style={{ width: 'fit-content' }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Repository + commits */}
      {project.repoUrl && (
        <div style={{ marginBottom: 32 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 16,
            }}
          >
            <span className="micro-label">Recent Commits</span>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--mid)',
                textDecoration: 'none',
              }}
            >
              View Repository →
            </a>
          </div>

          {commitsError && (
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--mid)' }}>
              ⚠ Commits unavailable
            </p>
          )}

          {!commitsError && commits.length === 0 && (
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--faint)' }}>
              Loading commits…
            </p>
          )}

          {commits.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {commits.map(commit => (
                <a
                  key={commit.sha}
                  href={commit.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="commit-item"
                  style={{ textDecoration: 'none' }}
                >
                  <span style={{ color: 'var(--mid)', flexShrink: 0, fontFamily: 'var(--font-mono)', fontSize: 12 }}>→</span>
                  <div>
                    <div className="commit-item__msg">
                      {commit.commit.message.split('\n')[0]}
                    </div>
                    <div className="commit-item__meta">
                      {commit.sha.slice(0, 7)} · {new Date(commit.commit.author.date).toLocaleDateString()}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  );
}


// ── Main Projects component ──────────────────────────────────
export default function Projects({ onProjectOpen }) {
  const [selectedLanguage, setSelectedLanguage]       = useState(null);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [projects, setProjects]                       = useState([]);
  const [languages, setLanguages]                     = useState([]);
  const [technologies, setTechnologies]               = useState([]);
  const [expandedId, setExpandedId]                   = useState(null);
  const [projectCommitDates, setProjectCommitDates]   = useState({});

  // Notify parent when a project is open
  useEffect(() => {
    if (onProjectOpen) onProjectOpen(expandedId !== null);
  }, [expandedId, onProjectOpen]);

  // Fetch projects from API
  useEffect(() => {
    const TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN || '';
    const headers = TOKEN ? { Authorization: `token ${TOKEN}` } : {};

    fetch('https://i875rw8q64.execute-api.us-east-1.amazonaws.com/prod/projects')
      .then(r => r.ok ? r.json() : Promise.reject('Failed'))
      .then(data => {
        const parsed = data.map(p => ({
          ...p,
          languages:    Array.isArray(p.languages)    ? p.languages    : (p.languages?.split(',')    || []),
          technologies: Array.isArray(p.technologies) ? p.technologies : (p.technologies?.split(',') || []),
        }));

        setProjects(parsed);
        setLanguages(Array.from(new Set(parsed.flatMap(p => p.languages))).sort());
        setTechnologies(Array.from(new Set(parsed.flatMap(p => p.technologies))).sort());

        // Fetch latest commit dates
        parsed.forEach(project => {
          if (!project.commitsApiUrl) return;
          fetch(project.commitsApiUrl, { headers })
            .then(r => r.ok ? r.json() : Promise.reject())
            .then(commits => {
              if (commits.length > 0) {
                setProjectCommitDates(prev => ({
                  ...prev,
                  [project.id]: new Date(commits[0].commit.author.date),
                }));
              }
            })
            .catch(() => {});
        });
      })
      .catch(err => console.error('API error:', err));
  }, []);

  const toggleLanguage = lang => {
    setSelectedLanguage(l => l === lang ? null : lang);
    setSelectedTechnologies([]);
  };

  const toggleTech = tech => {
    setSelectedTechnologies(prev =>
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

  const filteredProjects = selectedLanguage
    ? projects.filter(p => p.languages.includes(selectedLanguage))
    : projects;

  const filteredTechnologies = Array.from(
    new Set(filteredProjects.flatMap(p => p.technologies))
  ).sort();

  const getMatchState = project => {
    if (selectedTechnologies.length === 0) return 'none';
    const matches = project.technologies.filter(t => selectedTechnologies.includes(t)).length;
    if (matches === 0) return 'none';
    return matches === selectedTechnologies.length ? 'full' : 'partial';
  };

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (selectedTechnologies.length > 0) {
      const scoreA = a.technologies.filter(t => selectedTechnologies.includes(t)).length / selectedTechnologies.length;
      const scoreB = b.technologies.filter(t => selectedTechnologies.includes(t)).length / selectedTechnologies.length;
      if (scoreB !== scoreA) return scoreB - scoreA;
    }
    const aDate = projectCommitDates[a.id] || new Date(0);
    const bDate = projectCommitDates[b.id] || new Date(0);
    return bDate - aDate;
  });

  const toggleExpand = id => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <section id="projects" className="section" style={{ scrollMarginTop: 'var(--navbar-height)' }}>

      {/* Section header */}
      <div className="section-header section-header--bordered">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div className="micro-label" style={{ marginBottom: 12 }}>04 — Projects</div>
              <h2 className="section-title">Selected<br />Work</h2>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="section-title" style={{ fontSize: 64, lineHeight: 1 }}>
                {String(sortedProjects.length).padStart(2, '0')}
              </div>
              <div className="micro-label">Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div style={{ borderBottom: 'var(--bar-h) solid var(--bar)', background: 'var(--bg)' }}>
        {/* Language filters */}
        <div style={{ borderBottom: '1px solid var(--rule)' }}>
          <div className="container" style={{ padding: '12px 48px', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span className="micro-label" style={{ marginRight: 8, flexShrink: 0 }}>Language</span>
            <button
              className={`filter-btn ${!selectedLanguage ? 'active' : ''}`}
              onClick={() => { setSelectedLanguage(null); setSelectedTechnologies([]); }}
            >
              All
            </button>
            {languages.map(lang => (
              <button
                key={lang}
                className={`filter-btn ${selectedLanguage === lang ? 'active' : ''}`}
                onClick={() => toggleLanguage(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Tech filters */}
        <div>
          <div className="container" style={{ padding: '12px 48px', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span className="micro-label" style={{ marginRight: 8, flexShrink: 0 }}>Technology</span>
            {filteredTechnologies.map(tech => (
              <button
                key={tech}
                className={`filter-btn ${selectedTechnologies.includes(tech) ? 'active' : ''}`}
                onClick={() => toggleTech(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project rows */}
      {sortedProjects.map((project, index) => {
        const open = expandedId === project.id;
        const matchState = getMatchState(project);
        const matchCount = project.technologies.filter(t => selectedTechnologies.includes(t)).length;

        return (
          <div
            key={project.id}
            className={`row ${open ? 'row--expanded' : ''}`}
          >
            {/* Row header — clickable */}
            <div
              className="row__inner"
              style={{
                gridTemplateColumns: '48px 1fr auto auto',
                padding: '20px 48px',
                gap: 24,
                cursor: 'pointer',
                // Left colour stripe for match state
                borderLeft: selectedTechnologies.length > 0
                  ? `4px solid var(--match-${matchState === 'none' ? 'none' : matchState === 'full' ? 'full' : 'partial'})`
                  : 'none',
              }}
              onClick={() => toggleExpand(project.id)}
            >
              <span className="row__num">{String(index + 1).padStart(2, '0')}</span>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                  <span className="row__title">{project.title}</span>

                  {/* Match badge */}
                  {selectedTechnologies.length > 0 && (
                    <span className={`tag tag--match-${matchState === 'none' ? 'none' : matchState === 'full' ? 'full' : 'partial'}`}>
                      {matchState === 'full'
                        ? 'Full Match'
                        : matchState === 'partial'
                        ? `${matchCount}/${selectedTechnologies.length} Match`
                        : 'No Match'}
                    </span>
                  )}
                </div>
                <div className="row__desc">{project.description}</div>
              </div>

              {/* Tags */}
              <div className="row__tags">
                {project.technologies.slice(0, 4).map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="tag">+{project.technologies.length - 4}</span>
                )}
              </div>

              {/* Arrow */}
              <span className="row__arrow">{open ? '↑' : '↓'}</span>
            </div>

            {/* Expandable detail */}
            <div className={`row__expand-content ${open ? 'open' : ''}`}>
              {open && <ProjectDetail project={project} />}
            </div>
          </div>
        );
      })}

      {/* Bottom strip */}
      <div style={{ borderTop: 'var(--bar-h) solid var(--bar)', background: 'var(--surface)' }}>
        <div className="container" style={{ padding: '16px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="micro-label">{c('projects.section_description')}</span>
          <a href="https://github.com/Micmada" target="_blank" rel="noopener noreferrer" className="btn btn--outline" style={{ padding: '8px 16px' }}>
            GitHub ↗
          </a>
        </div>
      </div>

    </section>
  );
}