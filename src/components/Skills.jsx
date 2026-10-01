import { c, list } from '../content.js';

const CATEGORIES = [
  { label: 'Languages',              key: 'skills.languages' },
  { label: 'Frameworks & Libraries', key: 'skills.frameworks' },
  { label: 'Tools & Platforms',      key: 'skills.tools' },
  { label: 'Methodologies',          key: 'skills.methodologies' },
];

export default function Skills() {
  const entries = CATEGORIES.map(({ label, key }) => [label, list(key), key]);
  const total = entries.reduce((n, [, items]) => n + items.length, 0);

  return (
    <section id="skills" className="section" style={{ scrollMarginTop: 'var(--navbar-height)' }}>

      {/* Section header */}
      <div className="section-header section-header--bordered">
        <div className="container">
          <div className="micro-label" style={{ marginBottom: 12 }}>02 — Skills</div>
          <h2 className="section-title">Technical<br />Capabilities</h2>
        </div>
      </div>

      {/* Skill rows */}
      {entries.map(([category, items, key], i) => (
        <div className="row" key={category}>
          <div className="row__inner skills-row__inner">
            {/* Number */}
            <span className="row__num">0{i + 1}</span>

            {/* Category */}
            <div>
              <div className="row__title" style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}>
                {category}
              </div>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }} data-content={key}>
              {items.map(s => <span key={s} className="tag">{s}</span>)}
            </div>

            {/* Count */}
            <span className="micro-label skills-row__count" aria-label={`${items.length} skills`}>{items.length}</span>
          </div>
        </div>
      ))}

      {/* Summary strip */}
      <div style={{ borderTop: 'var(--bar-h) solid var(--bar)', background: 'var(--surface)' }}>
        <div className="container" style={{ paddingBlock: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: 13, color: 'var(--mid)', maxWidth: 560 }} data-content="skills.core_competency">
          {c('skills.core_competency')}
        </p>
        <div style={{ textAlign: 'right' }}>
          <div className="section-title" style={{ fontSize: 48, lineHeight: 1 }}>{total}</div>
          <div className="micro-label">Total Skills</div>
        </div>
        </div>
      </div>

    </section>
  );
}