import { c } from '../content.js';

// Figures from the Pantheon write-up (253 tests across five repos as of Sep 2026)
const STATS = [
  { value: '253', label: 'automated tests' },
  { value: '21',  label: 'end-to-end checks' },
  { value: '4',   label: 'modules' },
  { value: '9',   label: 'security rules in code' },
];

export default function Pantheon() {
  return (
    <section id="work" className="section">
      <div className="container section__inner">
        <div className="case__grid">
          <div className="case__copy">
            <h2 className="display case__title">Pantheon</h2>
            <p className="case__body" data-content="pantheon.description">{c('pantheon.description')}</p>
            <dl className="stats">
              {STATS.map(({ value, label }) => (
                <div key={label}>
                  <dt>{value}</dt>
                  <dd>{label}</dd>
                </div>
              ))}
            </dl>
            <p className="case__note" data-content="pantheon.status">{c('pantheon.status')}</p>
          </div>

          <img
            src="/images/pantheon-board-1600.jpg"
            srcSet="/images/pantheon-board-900.jpg 900w, /images/pantheon-board-1600.jpg 1600w"
            sizes="(max-width: 1024px) 100vw, 66vw"
            width="1600"
            height="1266"
            loading="lazy"
            alt="Pantheon's home dashboard for a demo store, with revenue, orders, stock, checkout funnel and review widgets."
            style={{ width: '100%', height: 'auto', border: '1px solid var(--rule)' }}
          />
        </div>
      </div>
    </section>
  );
}
