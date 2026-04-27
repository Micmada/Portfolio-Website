import { c } from '../content.js';

export default function Hero() {
  return (
    <section
      id="hero"
      className="section"
      style={{ paddingTop: 'var(--navbar-height)', borderBottom: 'var(--bar-h) solid var(--bar)' }}
    >
      {/* Name block */}
      <div style={{ borderBottom: 'var(--bar-h) solid var(--bar)' }}>
        <div className="container" style={{ padding: '80px 48px 60px' }}>
        <div className="micro-label" style={{ marginBottom: 20 }}>
          ↳ SOFTWARE ENGINEER · MILTON KEYNES, UK
        </div>

        <h1 className="display" style={{ marginBottom: 0 }}>
          {c('hero.name')}
        </h1>
        <h1 className="display" style={{ marginBottom: 0 }}>
          {c('hero.name_line2')}
        </h1>

        {/* Small spec tags top-right — hidden on mobile */}
        <div
          style={{
            position: 'absolute',
            top: 'calc(var(--navbar-height) + 80px)',
            right: 48,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
          className="hidden lg:flex"
        >
          <span className="micro-label">{c('hero.spec_location')}</span>
          <span className="micro-label">{c('hero.spec_experience')}</span>
        </div>
        </div>
      </div>

      {/* Info strip — three columns */}
      <div className="container" style={{ padding: '40px 48px' }}>
        <div className="hero-info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '48px' }}>
        {/* Col 1: bio */}
        <div>
          <div className="micro-label" style={{ marginBottom: 12 }}>About</div>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--mid)', maxWidth: 420 }}>
            {c('hero.description')}
          </p>
        </div>

        {/* Col 2: stack */}
        <div>
          <div className="micro-label" style={{ marginBottom: 12 }}>Core Stack</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {['Python', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS', 'Go'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Col 3: CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignSelf: 'flex-end' }}>
          <a href="#projects" className="btn btn--primary">
            View Work <span>→</span>
          </a>
          <a href="#contact" className="btn btn--outline">
            Get in Touch <span>↗</span>
          </a>
        </div>
        </div>
      </div>

      {/* Bottom hint strip */}
      <div style={{ borderTop: 'var(--bar-h) solid var(--bar)' }}>
        <div className="container hero-bottom-strip" style={{ padding: '12px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="micro-label">Re-site · Pantheon · ARM</span>
          <span className="micro-label">Scroll ↓</span>
        </div>
      </div>
    </section>
  );
}