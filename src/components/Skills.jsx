import { c } from '../content.js';

const SKILLS = {
  Languages:                  ['Python', 'JavaScript', 'TypeScript', 'Go', 'SQL', 'HTML/CSS'],
  'Frameworks & Libraries':   ['React', 'React Native', 'Node.js', 'Express', 'Flask', 'Django', 'Tailwind CSS', 'Prisma ORM'],
  'Tools & Platforms':        ['Git / GitHub', 'PostgreSQL', 'MongoDB', 'Jenkins', 'Gerrit', 'Docker', 'AWS', 'Streamlit'],
  'Methodologies':            ['RESTful API Design', 'OOP', 'Test-Driven Dev', 'CI/CD Pipelines', 'Agile / Scrum', 'System Architecture', 'Data Modeling'],
};

export default function Skills() {
  const entries = Object.entries(SKILLS);
  const total = Object.values(SKILLS).flat().length;

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
      {entries.map(([category, items], i) => (
        <div className="row" key={category}>
          <div className="row__inner skills-row__inner" style={{ gridTemplateColumns: '48px 240px 1fr auto', padding: '22px 48px' }}>
            {/* Number */}
            <span className="row__num">0{i + 1}</span>

            {/* Category */}
            <div>
              <div className="row__title" style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}>
                {category}
              </div>
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
              {items.map(s => <span key={s} className="tag">{s}</span>)}
            </div>

            {/* Count */}
            <span className="micro-label skills-row__count">{items.length}</span>
          </div>
        </div>
      ))}

      {/* Summary strip */}
      <div style={{ borderTop: 'var(--bar-h) solid var(--bar)', background: 'var(--surface)' }}>
        <div className="container" style={{ padding: '20px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: 13, color: 'var(--mid)', maxWidth: 560 }}>
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