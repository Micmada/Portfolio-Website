import { useState, useEffect, useRef } from 'react';
import { c } from '../content.js';

function initialTheme() {
  // index.html sets data-theme before first paint (stored choice or system preference)
  return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}

export default function Navbar({ projectOpen = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(initialTheme);
  const navRef = useRef(null);

  // Apply theme to root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    // Only persist an explicit choice, so visitors otherwise follow their system setting
    try { localStorage.setItem('theme', next); } catch { /* storage unavailable */ }
  };

  // Set CSS variable for navbar height
  useEffect(() => {
    if (navRef.current) {
      document.documentElement.style.setProperty(
        '--navbar-height',
        `${navRef.current.offsetHeight}px`
      );
    }
  }, [menuOpen]);

  // Close mobile menu when project opens
  useEffect(() => {
    if (projectOpen && menuOpen) setMenuOpen(false);
  }, [projectOpen, menuOpen]);

  const links = [
    { label: 'Skills',      num: '02', href: '#skills' },
    { label: 'Experience',  num: '03', href: '#experience' },
    { label: 'Projects',    num: '04', href: '#projects' },
    { label: 'Contact',     num: '05', href: '#contact' },
  ];

  const nextTheme = theme === 'light' ? 'dark' : 'light';

  return (
    <nav ref={navRef} className="nav" aria-label="Main">
      <div className="nav__inner">

        {/* Logo */}
        <a href="#" className="nav__logo" data-content="navbar.brand_name">
          {c('navbar.brand_name')}
        </a>

        {/* Desktop links */}
        <ul className="nav__links">
          {links.map(({ label, num, href }) => (
            <li key={label}>
              <a href={href} className="nav__link">
                <span style={{ color: 'var(--faint)', marginRight: 6 }} aria-hidden="true">{num}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav__actions">
          {/* Theme toggle */}
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${nextTheme} theme`}
            title={`Switch to ${nextTheme} theme`}
          >
            <span aria-hidden="true">{theme === 'light' ? '◐' : '◑'}</span>
          </button>

          {/* Hamburger */}
          <button
            type="button"
            className={`nav__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(m => !m)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className={`nav__mobile ${menuOpen ? 'open' : ''}`}>
        {links.map(({ label, num, href }) => (
          <a
            key={label}
            href={href}
            className="nav__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            <span className="num" aria-hidden="true">{num}</span>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
