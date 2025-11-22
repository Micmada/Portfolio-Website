import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = ['skills', 'experience', 'projects', 'contact'];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500`}
      style={{
        paddingTop: 'env(safe-area-inset-top)',
        backgroundColor: scrolled ? 'rgba(30,30,46,0.95)' : 'transparent',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-tight select-none cursor-default" style={{ color: '#D4D4D4' }}>
          Michael Eddleston
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-medium">
          {sections.map((section) => (
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

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block h-0.5 w-8 bg-gray-200 transform transition duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          ></span>
          <span
            className={`block h-0.5 w-8 bg-gray-200 transition duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`block h-0.5 w-8 bg-gray-200 transform transition duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1E1E2E] px-6 py-4 shadow-lg flex flex-col space-y-4">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="capitalize font-medium transition-colors duration-300"
              style={{ color: '#D4D4D4' }}
              onClick={() => setMenuOpen(false)}
              onMouseEnter={(e) => (e.target.style.color = '#569CD6')}
              onMouseLeave={(e) => (e.target.style.color = '#D4D4D4')}
            >
              {section}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
