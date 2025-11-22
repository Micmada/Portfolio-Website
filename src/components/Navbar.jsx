import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Scroll effect for shadow
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
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500`}
      style={{
        paddingTop: 'env(safe-area-inset-top)',
        backgroundColor: scrolled ? 'rgba(30,30,46,0.95)' : 'transparent',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="text-2xl font-extrabold tracking-tight select-none cursor-default"
          style={{ color: '#D4D4D4' }}
        >
          Michael Eddleston
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {['skills', 'experience', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="transition-colors duration-300 capitalize"
                style={{ color: '#D4D4D4' }}
                onMouseEnter={(e) => (e.target.style.color = '#569CD6')}
                onMouseLeave={(e) => (e.target.style.color = '#D4D4D4')}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`absolute w-8 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-45 top-3.5' : 'top-2'}`}
          />
          <span
            className={`absolute w-8 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'top-3.5'}`}
          />
          <span
            className={`absolute w-8 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-45 top-3.5' : 'top-5'}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-[#1E1E2E] w-full py-4 space-y-4">
          {['skills', 'experience', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="capitalize text-lg"
                style={{ color: '#D4D4D4' }}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={(e) => (e.target.style.color = '#569CD6')}
                onMouseLeave={(e) => (e.target.style.color = '#D4D4D4')}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
