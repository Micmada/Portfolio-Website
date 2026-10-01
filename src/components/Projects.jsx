import { useState, useEffect } from 'react';
import ProjectDialog from './ProjectDialog.jsx';
import { displayName } from '../techNames.js';

const PROJECTS_API = 'https://i875rw8q64.execute-api.us-east-1.amazonaws.com/prod/projects';
const GITHUB_PROFILE = 'https://github.com/Micmada';

// Display copy for known repos, keyed by repo name (lowercase). The API's
// titles are generated from repo slugs ("Fittrack Uk"), so curated projects
// get a proper title and a one-line description here. Listed order is
// display order; anything else from the API follows in API order.
const CURATED = {
  'f1-strategy-predictor':       { title: 'F1 Strategy Predictor', desc: 'Final-year project. XGBoost and Monte Carlo simulation on FastF1 telemetry.', stack: 'Python, XGBoost, Streamlit' },
  'fittrack-uk':                 { title: 'FitTrack UK', desc: 'Nutrition and workout tracking with barcode scanning and UK RDA targets.', stack: 'React Native, TypeScript' },
  'candle-ecommerce-store':      { title: 'Candle Store', desc: 'Storefront and admin system for a boutique candle maker.', stack: 'React, Express, PostgreSQL' },
  'go-url-shortener':            { title: 'Go URL Shortener', desc: 'URL shortener in Go with JWT authentication.', stack: 'Go, Gin, GORM' },
  'portfolio-ingestion-service': { title: 'Portfolio Ingestion Service', desc: 'Lambda that pulls my GitHub repositories into DynamoDB to feed this site.', stack: 'AWS Lambda, DynamoDB' },
  'react-data-dashboard':        { title: 'React Data Dashboard', desc: 'Upload a CSV, then arrange charts on a drag-and-drop grid.', stack: 'React, Recharts' },
  'twitter-data-miner':          { title: 'Twitter Data Miner' },
  'mern-task-manager':           { title: 'MERN Task Manager' },
  'django_markdown_blog':        { title: 'Django Markdown Blog' },
  'microblog':                   { title: 'Microblog' },
  'url_shortener':               { title: 'Flask URL Shortener' },
};

// This site is listed in the API too; no need to show it on itself.
const HIDDEN = new Set(['portfolio-website']);

// Tile surfaces cycle so the row doesn't read as identical cards.
const SURFACES = ['tile--ember', '', 'tile--warm', '', 'tile--invert', ''];

function repoName(repoUrl = '') {
  return repoUrl.replace(/\/+$/, '').split('/').pop()?.toLowerCase() ?? '';
}

function toList(value) {
  if (Array.isArray(value)) return value;
  return value ? value.split(',').map(s => s.trim()).filter(Boolean) : [];
}

function toTiles(apiProjects) {
  const order = Object.keys(CURATED);
  return apiProjects
    .map(p => {
      const key = repoName(p.repoUrl);
      const curated = CURATED[key] ?? {};
      return {
        id: p.id,
        key,
        title: curated.title ?? p.title,
        desc: curated.desc ?? p.description,
        stack: curated.stack ?? toList(p.technologies).map(displayName).join(', '),
        details: p.details ?? '',
        languages: toList(p.languages),
        technologies: toList(p.technologies),
        repoUrl: p.repoUrl,
        hostedUrl: p.hostedUrl,
      };
    })
    .filter(t => !HIDDEN.has(t.key))
    .sort((a, b) => {
      const ai = order.indexOf(a.key), bi = order.indexOf(b.key);
      return (ai === -1 ? Infinity : ai) - (bi === -1 ? Infinity : bi);
    });
}

function SkeletonTiles() {
  return Array.from({ length: 4 }, (_, i) => (
    <div key={i} className="tile tile--skeleton" aria-hidden="true">
      <div className="skeleton-bar" style={{ width: '70%', height: 24 }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div className="skeleton-bar" />
        <div className="skeleton-bar" style={{ width: '80%' }} />
        <div className="skeleton-bar" style={{ width: '45%' }} />
      </div>
    </div>
  ));
}

export default function Projects() {
  const [tiles, setTiles]   = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error
  const [open, setOpen]     = useState(null);      // project shown in the dialog

  useEffect(() => {
    let cancelled = false;
    fetch(PROJECTS_API)
      .then(r => r.ok ? r.json() : Promise.reject(new Error(`Projects API ${r.status}`)))
      .then(data => {
        if (cancelled) return;
        setTiles(toTiles(data));
        setStatus('ready');
      })
      .catch(err => {
        console.error('API error:', err);
        if (!cancelled) setStatus('error');
      });
    return () => { cancelled = true; };
  }, []);

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="container section__inner">
        <h2 id="projects-heading" className="h2">Other projects</h2>

        {status === 'error' ? (
          <p className="tiles__status" role="alert">
            Projects couldn’t be loaded right now. <a href={GITHUB_PROFILE}>Browse them on GitHub</a>.
          </p>
        ) : (
          <div className="tiles" aria-busy={status === 'loading'}>
            {status === 'loading' && <SkeletonTiles />}
            {tiles.map((t, i) => (
              <button
                key={t.id}
                type="button"
                className={`tile tile--button ${SURFACES[i % SURFACES.length]}`}
                onClick={() => setOpen(t)}
                aria-haspopup="dialog"
              >
                <span className="tile__title">{t.title}</span>
                <span style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <span className="tile__desc">{t.desc}</span>
                  <span className="tile__stack">{t.stack}</span>
                  <span className="tile__more">{t.hostedUrl ? 'Details and live site' : 'Details'}</span>
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      <ProjectDialog project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
