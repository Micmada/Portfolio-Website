import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Scroll effect for background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set CSS variable for navbar height
  useEffect(() => {
    if (navRef.current) {
      document.documentElement.style.setProperty(
        '--navbar-height',
        `${navRef.current.offsetHeight}px`
      );
    }
  }, [navRef.current, menuOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500`}
      style={{
        paddingTop: 'env(safe-area-inset-top)',
        backgroundColor: scrolled ? 'rgba(250, 250, 250, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid #E0E0E0' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-5 flex justify-between items-center">
        {/* Logo/Name */}
        <a 
          href="#"
          className="text-xl font-bold tracking-tight select-none transition-colors duration-300"
          style={{ color: '#1A1A1A' }}
          onMouseEnter={(e) => (e.target.style.color = '#FF6B6B')}
          onMouseLeave={(e) => (e.target.style.color = '#1A1A1A')}
        >
          ME<span style={{ color: '#FF6B6B' }}>.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          {['Skills', 'Experience', 'Projects', 'Contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section.toLowerCase()}`}
                className="text-sm tracking-wide transition-all duration-300 relative group"
                style={{ color: '#666666' }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#1A1A1A';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#666666';
                }}
              >
                {section}
                {/* Underline effect */}
                <span 
                  className="absolute left-0 bottom-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: '#FF6B6B' }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu - Minimal design */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-6 h-6 relative group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute w-6 h-px transition-all duration-300 ${
              menuOpen ? 'rotate-45 top-3' : 'top-1'
            }`}
            style={{ backgroundColor: menuOpen ? '#FF6B6B' : '#1A1A1A' }}
          />
          <span
            className={`absolute w-6 h-px transition-all duration-300 ${
              menuOpen ? 'opacity-0' : 'top-3'
            }`}
            style={{ backgroundColor: '#1A1A1A' }}
          />
          <span
            className={`absolute w-6 h-px transition-all duration-300 ${
              menuOpen ? '-rotate-45 top-3' : 'top-5'
            }`}
            style={{ backgroundColor: menuOpen ? '#FF6B6B' : '#1A1A1A' }}
          />
        </button>
      </div>

      {/* Mobile Menu - Minimalist dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          backgroundColor: '#FAFAFA',
          borderBottom: menuOpen ? '1px solid #E0E0E0' : 'none',
        }}
      >
        <ul className="flex flex-col px-6 sm:px-8 py-6 space-y-4">
          {['Skills', 'Experience', 'Projects', 'Contact'].map((section, index) => (
            <li 
              key={section}
              className="transform transition-all duration-300"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
                transitionDelay: menuOpen ? `${index * 50}ms` : '0ms',
              }}
            >
              <a
                href={`#${section.toLowerCase()}`}
                className="text-lg font-medium transition-colors duration-300 inline-block"
                style={{ color: '#666666' }}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={(e) => (e.target.style.color = '#FF6B6B')}
                onMouseLeave={(e) => (e.target.style.color = '#666666')}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}