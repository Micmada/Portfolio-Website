import { c } from '../content.js';

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ scrollMarginTop: 'var(--navbar-height)' }}>

      {/* Section header */}
      <div className="section-header section-header--bordered">
        <div className="container">
          <div className="micro-label" style={{ marginBottom: 12 }}>05 — Contact</div>
          <h2 className="section-title">Contact</h2>
        </div>
      </div>

      {/* Main contact row */}
      <div className="row" style={{ cursor: 'default' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 280px',
              gap: 48,
              padding: '40px 0',
            }}
          >
          {/* Col 1: description + CTA */}
          <div>
            <span className="micro-label" style={{ display: 'block', marginBottom: 12 }}>Get in Touch</span>
            <p style={{ fontSize: 15, color: 'var(--mid)', lineHeight: 1.7, marginBottom: 24 }}>
              You can reach me at the address below.
            </p>
            <a href={`mailto:${c('contact.email')}`} className="btn btn--primary">
              Send Email →
            </a>
          </div>

          {/* Col 2: email + response note */}
          <div>
            <span className="micro-label" style={{ display: 'block', marginBottom: 12 }}>Email</span>
            <a
              href={`mailto:${c('contact.email')}`}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(20px, 2.5vw, 32px)',
                letterSpacing: '0.03em',
                color: 'var(--fg)',
                textDecoration: 'none',
                display: 'block',
                marginBottom: 24,
                lineHeight: 1.1,
              }}
            >
              {c('contact.email')}
            </a>
            <div className="callout" style={{ marginTop: 'auto' }}>
              <span className="micro-label" style={{ display: 'block', marginBottom: 6 }}>Response Time</span>
              <p style={{ fontSize: 13, color: 'var(--mid)' }}>Usually within 24 hours.</p>
            </div>
          </div>

          {/* Col 3: links + location */}
          <div>
            <span className="micro-label" style={{ display: 'block', marginBottom: 12 }}>Links</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 24 }}>
              {[
                { label: 'GitHub',   href: 'https://github.com/Micmada' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/michael-eddleston-4867a1214/' },
                { label: 'CV',       href: '/Michael_Eddleston_CV.pdf', download: true },
              ].map(({ label, href, download }) => (
                <a
                  key={label}
                  href={href}
                  target={download ? undefined : '_blank'}
                  rel={download ? undefined : 'noopener noreferrer'}
                  download={download}
                  className="btn btn--outline"
                  style={{ padding: '8px 16px', justifyContent: 'space-between' }}
                >
                  <span>{label}</span>
                  <span>{download ? '↓' : '↗'}</span>
                </a>
              ))}
            </div>

            <span className="micro-label" style={{ display: 'block', marginBottom: 6 }}>Location</span>
            <p style={{ fontSize: 13, color: 'var(--mid)' }}>
              {c('contact.location')} · {c('contact.location_note')}
            </p>
          </div>
          </div>
        </div>
      </div>

    </section>
  );
}