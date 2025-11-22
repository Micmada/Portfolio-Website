import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? 'shadow-lg' : ''
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(30, 30, 46, 0.95)' : 'transparent',
        color: '#D4D4D4',
        paddingTop: 'env(safe-area-inset-top)', // add safe area padding for mobile notches
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          className="text-2xl font-extrabold tracking-tight select-none cursor-default"
          style={{ color: '#D4D4D4' }}
        >
          Michael Eddleston
        </h1>
        <ul className="flex space-x-8 font-medium">
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
      </div>
    </nav>
  );
}
