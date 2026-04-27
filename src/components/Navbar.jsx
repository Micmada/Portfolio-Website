import { useState, useEffect, useRef } from 'react';
import { c } from '../content.js';

export default function Navbar({ projectOpen = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });
  const navRef = useRef(null);

  // Apply theme to root element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

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

  return (
    <nav ref={navRef} className="nav">
      <div className="nav__inner">

        {/* Logo */}
        <a href="#" className="nav__logo">
          {c('navbar.brand_name')}
        </a>

        {/* Desktop links */}
        <ul className="nav__links">
          {links.map(({ label, num, href }) => (
            <li key={label}>
              <a href={href} className="nav__link">
                <span style={{ opacity: 0.4, marginRight: 6 }}>{num}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="nav__actions">
          {/* Theme toggle */}
          <button
            className="theme-toggle"
            onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '◐' : '◑'}
          </button>

          {/* Hamburger */}
          <button
            className={`nav__hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(m => !m)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`nav__mobile ${menuOpen ? 'open' : ''}`}>
        {links.map(({ label, num, href }) => (
          <a
            key={label}
            href={href}
            className="nav__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            <span className="num">{num}</span>
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}