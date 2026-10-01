import { c } from '../content.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">

        {/* Left */}
        <div>
          <div className="footer__logo" data-content="footer.name">{c('footer.name')}</div>
          <ul className="footer__links" aria-label="Footer">
            {[
              { label: 'Skills',      href: '#skills' },
              { label: 'Experience',  href: '#experience' },
              { label: 'Projects',    href: '#projects' },
              { label: 'Contact',     href: '#contact' },
            ].map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="footer__link">{label}</a>
              </li>
            ))}
          </ul>
          <div className="footer__copy">
            © {new Date().getFullYear()} {c('footer.name')} · Built with <span data-content="footer.built_with">{c('footer.built_with')}</span>
          </div>
          <button
            type="button"
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            <span aria-hidden="true">↑</span> Back to Top
          </button>
        </div>

        {/* Right */}
        <div className="footer__connect">
          <span className="micro-label" style={{ marginBottom: 4 }}>Connect</span>
          {[
            { label: 'GitHub',   href: 'https://github.com/Micmada',                                          ext: true },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/michael-eddleston-4867a1214/',             ext: true },
            { label: 'Email',    href: `mailto:${c('contact.email')}`,                                        ext: false },
          ].map(({ label, href, ext }) => (
            <a
              key={label}
              href={href}
              target={ext ? '_blank' : undefined}
              rel={ext ? 'noopener noreferrer' : undefined}
              className="footer__connect-link"
            >
              <span>{label}</span>
              <span aria-hidden="true">{ext ? '↗' : '→'}</span>
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}