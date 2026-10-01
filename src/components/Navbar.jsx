import { useState, useEffect } from 'react';
import { c } from '../content.js';

const LINKS = [
  { label: 'Work',       href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

function initialTheme() {
  // index.html sets data-theme before first paint (stored choice, else dark)
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  const toggleTheme = () => {
    setTheme(nextTheme);
    try { localStorage.setItem('theme', nextTheme); } catch { /* storage unavailable */ }
  };

  return (
    <nav className="nav" aria-label="Main">
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" data-content="navbar.brand_name">
          {c('navbar.brand_name')}
        </a>

        <div className="nav__right">
          <ul className="nav__links">
            {LINKS.map(({ label, href }) => (
              <li key={label}><a href={href} className="nav__link">{label}</a></li>
            ))}
          </ul>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${nextTheme} theme`}
          >
            {nextTheme === 'light' ? 'Light' : 'Dark'}
          </button>

          <button
            type="button"
            className="nav__menu-btn"
            onClick={() => setMenuOpen(m => !m)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`nav__mobile ${menuOpen ? 'open' : ''}`}>
        {LINKS.map(({ label, href }) => (
          <a key={label} href={href} className="nav__mobile-link" onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
