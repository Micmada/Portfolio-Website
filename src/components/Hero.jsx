import { c, list } from '../content.js';

export default function Hero() {
  return (
    <section
      id="hero"
      className="section"
      style={{ borderBottom: 'var(--bar-h) solid var(--bar)' }}
    >
      {/* Name block */}
      <div style={{ borderBottom: 'var(--bar-h) solid var(--bar)' }}>
        <div className="container" style={{ paddingTop: 80, paddingBottom: 60, position: 'relative' }}>
        <div className="micro-label" style={{ marginBottom: 20 }}>
          <span aria-hidden="true">↳ </span>
          <span data-content="hero.tagline">{c('hero.tagline')}</span>
        </div>

        <h1 className="display hero-name">
          <span data-content="hero.name">{c('hero.name')}</span>
          <span data-content="hero.name_line2">{c('hero.name_line2')}</span>
        </h1>

        {/* Small spec tags top-right — desktop only */}
        <div className="hero-specs">
          <span className="micro-label" data-content="hero.spec_location">{c('hero.spec_location')}</span>
          <span className="micro-label" data-content="hero.spec_experience">{c('hero.spec_experience')}</span>
        </div>
        </div>
      </div>

      {/* Info strip — three columns */}
      <div className="container" style={{ paddingBlock: '40px' }}>
        <div className="hero-info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '48px' }}>
        {/* Col 1: bio */}
        <div>
          <div className="micro-label" style={{ marginBottom: 12 }}>About</div>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--mid)', maxWidth: 420 }} data-content="hero.description">
            {c('hero.description')}
          </p>
        </div>

        {/* Col 2: stack */}
        <div>
          <div className="micro-label" style={{ marginBottom: 12 }}>Core Stack</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }} data-content="hero.core_stack">
            {list('hero.core_stack').map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        {/* Col 3: CTAs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignSelf: 'flex-end' }}>
          <a href="#projects" className="btn btn--primary">
            View Work <span aria-hidden="true">→</span>
          </a>
          <a href="#contact" className="btn btn--outline">
            Get in Touch <span aria-hidden="true">↗</span>
          </a>
        </div>
        </div>
      </div>

      {/* Bottom hint strip */}
      <div style={{ borderTop: 'var(--bar-h) solid var(--bar)' }}>
        <div className="container hero-bottom-strip" style={{ paddingBlock: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="micro-label" data-content="hero.strip">{c('hero.strip')}</span>
          <span className="micro-label" aria-hidden="true">Scroll ↓</span>
        </div>
      </div>
    </section>
  );
}
