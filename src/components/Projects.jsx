import { useState, useEffect } from 'react';
import { c } from '../content.js';

const PROJECTS_API = 'https://i875rw8q64.execute-api.us-east-1.amazonaws.com/prod/projects';
const GITHUB_USER  = 'Micmada';
// One request for every repo's last push date (instead of one commits request per project).
// Unauthenticated: never ship a GitHub token in client code, Vite bundles VITE_* vars publicly.
const REPOS_API    = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`;
const CACHE_TTL_MS = 60 * 60 * 1000;

// ── Cached fetch ─────────────────────────────────────────────
// Caches GitHub responses in localStorage to stay well under the
// unauthenticated rate limit (60 requests/hour per visitor IP).
async function fetchJsonCached(url) {
  const key = `gh-cache:${url}`;
  try {
    const hit = JSON.parse(localStorage.getItem(key));
    if (hit && Date.now() - hit.t < CACHE_TTL_MS) return hit.data;
  } catch { /* storage unavailable or corrupt */ }

  const r = await fetch(url);
  if (!r.ok) throw new Error(`GitHub ${r.status}`);
  const data = await r.json();
  try { localStorage.setItem(key, JSON.stringify({ t: Date.now(), data })); } catch { /* quota/blocked */ }
  return data;
}

function repoName(repoUrl = '') {
  return repoUrl.replace(/\/+$/, '').split('/').pop()?.toLowerCase();
}

// ── Commits fetcher ──────────────────────────────────────────
function useCommits(commitsApiUrl) {
  const [state, setState] = useState({ commits: [], error: null, loaded: false });

  useEffect(() => {
    if (!commitsApiUrl) return;
    let cancelled = false;
    setState({ commits: [], error: null, loaded: false });

    fetchJsonCached(commitsApiUrl)
      .then(data => { if (!cancelled) setState({ commits: data.slice(0, 5), error: null, loaded: true }); })
      .catch(e => { if (!cancelled) setState({ commits: [], error: e.message, loaded: true }); });

    return () => { cancelled = true; };
  }, [commitsApiUrl]);

  return state;
}


// ── Expanded project detail ──────────────────────────────────
function ProjectDetail({ project }) {
  const { commits, error: commitsError, loaded } = useCommits(project.commitsApiUrl);

  return (
    <div className="row__expand-inner project-detail">

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
            <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
              {project.hostedUrl && (
                <a
                  href={project.hostedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Live Site <span aria-hidden="true">↗</span>
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  GitHub <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Tech stack */}
        <div style={{ minWidth: 200 }}>
          <span className="micro-label" style={{ display: 'block', marginBottom: 10 }}>Stack</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[...new Set([...project.languages, ...project.technologies])].map(t => (
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
              View Repository <span aria-hidden="true">→</span>
            </a>
          </div>

          {commitsError && (
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--mid)' }}>
              ⚠ Commits unavailable right now. See the repository on GitHub.
            </p>
          )}

          {!loaded && (
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--faint)' }}>
              Loading commits…
            </p>
          )}

          {loaded && !commitsError && commits.length === 0 && (
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--faint)' }}>
              No commits yet.
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
                  <span style={{ color: 'var(--mid)', flexShrink: 0, fontFamily: 'var(--font-mono)', fontSize: 12 }} aria-hidden="true">→</span>
                  <div>
                    <div className="commit-item__msg">
                      {commit.commit.message.split('\n')[0]}
                    </div>
                    <div className="commit-item__meta">
                      {commit.sha.slice(0, 7)} · {new Date(commit.commit.author.date).toLocaleDateString('en-GB')}
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
  const [status, setStatus]                           = useState('loading'); // loading | ready | error
  const [expandedId, setExpandedId]                   = useState(null);
  const [lastPushed, setLastPushed]                   = useState({}); // repo name → Date

  // Notify parent when a project is open
  useEffect(() => {
    if (onProjectOpen) onProjectOpen(expandedId !== null);
  }, [expandedId, onProjectOpen]);

  // Fetch projects from API
  useEffect(() => {
    fetch(PROJECTS_API)
      .then(r => r.ok ? r.json() : Promise.reject(new Error(`Projects API ${r.status}`)))
      .then(data => {
        const parsed = data.map(p => ({
          ...p,
          languages:    Array.isArray(p.languages)    ? p.languages    : (p.languages?.split(',')    || []),
          technologies: Array.isArray(p.technologies) ? p.technologies : (p.technologies?.split(',') || []),
        }));

        setProjects(parsed);
        setLanguages(Array.from(new Set(parsed.flatMap(p => p.languages))).sort());
        setStatus('ready');
      })
      .catch(err => {
        console.error('API error:', err);
        setStatus('error');
      });

    // Latest push dates for sorting — one request for all repos
    fetchJsonCached(REPOS_API)
      .then(repos => {
        setLastPushed(Object.fromEntries(
          repos.map(r => [r.name.toLowerCase(), new Date(r.pushed_at)])
        ));
      })
      .catch(() => { /* fall back to API order */ });
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
    const aDate = lastPushed[repoName(a.repoUrl)] || new Date(0);
    const bDate = lastPushed[repoName(b.repoUrl)] || new Date(0);
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
            <div style={{ textAlign: 'right' }} aria-live="polite">
              <div className="section-title" style={{ fontSize: 64, lineHeight: 1 }}>
                {status === 'ready' ? String(sortedProjects.length).padStart(2, '0') : '—'}
              </div>
              <div className="micro-label">Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      {status === 'ready' && (
      <div style={{ borderBottom: 'var(--bar-h) solid var(--bar)', background: 'var(--bg)' }}>
        {/* Language filters */}
        <div style={{ borderBottom: '1px solid var(--rule)' }}>
          <div className="container" role="group" aria-labelledby="filter-language" style={{ paddingBlock: '12px', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span id="filter-language" className="micro-label" style={{ marginRight: 8, flexShrink: 0 }}>Language</span>
            <button
              type="button"
              className={`filter-btn ${!selectedLanguage ? 'active' : ''}`}
              aria-pressed={!selectedLanguage}
              onClick={() => { setSelectedLanguage(null); setSelectedTechnologies([]); }}
            >
              All
            </button>
            {languages.map(lang => (
              <button
                type="button"
                key={lang}
                className={`filter-btn ${selectedLanguage === lang ? 'active' : ''}`}
                aria-pressed={selectedLanguage === lang}
                onClick={() => toggleLanguage(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Tech filters */}
        <div>
          <div className="container" role="group" aria-labelledby="filter-tech" style={{ paddingBlock: '12px', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span id="filter-tech" className="micro-label" style={{ marginRight: 8, flexShrink: 0 }}>Technology</span>
            {filteredTechnologies.map(tech => (
              <button
                type="button"
                key={tech}
                className={`filter-btn ${selectedTechnologies.includes(tech) ? 'active' : ''}`}
                aria-pressed={selectedTechnologies.includes(tech)}
                onClick={() => toggleTech(tech)}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </div>
      )}

      {/* Loading / error states */}
      {status !== 'ready' && (
        <div className="container" style={{ paddingBlock: '40px' }}>
          <p className="micro-label" role={status === 'error' ? 'alert' : undefined}>
            {status === 'loading'
              ? 'Loading projects…'
              : <>Projects couldn't be loaded right now. <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--fg)' }}>Browse them on GitHub ↗</a></>}
          </p>
        </div>
      )}

      {/* Project rows */}
      {sortedProjects.map((project, index) => {
        const open = expandedId === project.id;
        const panelId = `project-panel-${project.id}`;
        const matchState = getMatchState(project);
        const matchCount = project.technologies.filter(t => selectedTechnologies.includes(t)).length;

        return (
          <div
            key={project.id}
            className={`row ${open ? 'row--expanded' : ''}`}
          >
            {/* Row header — clickable */}
            <h3 style={{ margin: 0 }}>
            <button
              type="button"
              className="row__inner row__toggle project-row__inner"
              aria-expanded={open}
              aria-controls={panelId}
              style={{
                // Left colour stripe for match state
                borderLeft: selectedTechnologies.length > 0
                  ? `4px solid var(--match-${matchState})`
                  : 'none',
              }}
              onClick={() => toggleExpand(project.id)}
            >
              <span className="row__num">{String(index + 1).padStart(2, '0')}</span>

              <span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
                  <span className="row__title">{project.title}</span>

                  {/* Match badge */}
                  {selectedTechnologies.length > 0 && (
                    <span className={`tag tag--match-${matchState}`}>
                      {matchState === 'full'
                        ? 'Full Match'
                        : matchState === 'partial'
                        ? `${matchCount}/${selectedTechnologies.length} Match`
                        : 'No Match'}
                    </span>
                  )}
                </span>
                <span className="row__desc" style={{ display: 'block' }}>{project.description}</span>
              </span>

              {/* Tags */}
              <span className="row__tags">
                {project.technologies.slice(0, 4).map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="tag">+{project.technologies.length - 4}</span>
                )}
              </span>

              {/* Arrow */}
              <span className="row__arrow" aria-hidden="true">{open ? '↑' : '↓'}</span>
            </button>
            </h3>

            {/* Expandable detail */}
            <div id={panelId} className={`row__expand-content ${open ? 'open' : ''}`}>
              <div className="row__expand-clip">
                {open && <ProjectDetail project={project} />}
              </div>
            </div>
          </div>
        );
      })}

      {/* Bottom strip */}
      <div style={{ borderTop: 'var(--bar-h) solid var(--bar)', background: 'var(--surface)' }}>
        <div className="container" style={{ paddingBlock: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24 }}>
          <span className="micro-label" data-content="projects.section_description">{c('projects.section_description')}</span>
          <a href={`https://github.com/${GITHUB_USER}`} target="_blank" rel="noopener noreferrer" className="btn btn--outline" style={{ padding: '8px 16px', flexShrink: 0 }}>
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

    </section>
  );
}
