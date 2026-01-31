import { useState, useEffect, useRef } from 'react';

export default function Navbar({ projectOpen = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Scroll effect for glassmorphism
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

  // Close mobile menu when project opens
  useEffect(() => {
    if (projectOpen && menuOpen) {
      setMenuOpen(false);
    }
  }, [projectOpen, menuOpen]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-500`}
      style={{
        paddingTop: 'env(safe-area-inset-top)',
        backgroundColor: scrolled ? 'rgba(21, 26, 29, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(39, 69, 83, 0.2)' : '1px solid transparent',
        fontFamily: "'Epilogue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        opacity: projectOpen ? 0.5 : 1,
        pointerEvents: projectOpen ? 'none' : 'auto',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo/Monogram - architectural mark */}
        <a 
          href="#"
          className="flex items-center gap-3 select-none transition-all duration-300 group"
        >
          {/* Monogram box */}
          <div 
            className="w-10 h-10 flex items-center justify-center font-black transition-all duration-300"
            style={{
              backgroundColor: 'rgba(39, 69, 83, 0.1)',
              border: '1px solid rgba(39, 69, 83, 0.3)',
              color: '#274553',
              fontSize: '14px',
              letterSpacing: '-0.05em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#274553';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(39, 69, 83, 0.1)';
              e.currentTarget.style.color = '#274553';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ME
          </div>
          
          {/* Optional full name - hidden on mobile */}
          <span 
            className="hidden sm:block text-sm font-bold uppercase tracking-[0.15em] transition-colors duration-300"
            style={{ color: '#cbd5e1' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#274553';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#cbd5e1';
            }}
          >
            Eddleston
          </span>
        </a>

        {/* Desktop Menu - minimal with micro labels */}
        <ul className="hidden md:flex items-center gap-8">
          {[
            { label: 'Skills', number: '02' },
            { label: 'Experience', number: '03' },
            { label: 'Projects', number: '04' },
            { label: 'Contact', number: '05' },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={`#${item.label.toLowerCase()}`}
                className="group flex flex-col items-start transition-all duration-300"
              >
                {/* Micro number label */}
                <span 
                  className="text-[10px] font-bold uppercase tracking-[0.2em] mb-0.5 transition-colors duration-300"
                  style={{ color: '#64748b' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#274553';
                  }}
                >
                  {item.number}
                </span>
                
                {/* Main label */}
                <span
                  className="text-sm font-medium uppercase tracking-wide relative transition-colors duration-300"
                  style={{ 
                    color: '#94a3b8',
                    letterSpacing: '0.05em',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#94a3b8';
                  }}
                >
                  {item.label}
                  
                  {/* Underline indicator */}
                  <span 
                    className="absolute left-0 -bottom-1 h-px w-0 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: '#274553' }}
                  />
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu - architectural lines */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`absolute w-6 h-[2px] transition-all duration-300 ${
              menuOpen ? 'rotate-45 top-[15px]' : 'top-2'
            }`}
            style={{ 
              backgroundColor: menuOpen ? '#274553' : '#cbd5e1',
            }}
          />
          <span
            className={`absolute w-6 h-[2px] transition-all duration-300 ${
              menuOpen ? 'opacity-0' : 'top-[15px]'
            }`}
            style={{ backgroundColor: '#cbd5e1' }}
          />
          <span
            className={`absolute w-6 h-[2px] transition-all duration-300 ${
              menuOpen ? '-rotate-45 top-[15px]' : 'bottom-2'
            }`}
            style={{ 
              backgroundColor: menuOpen ? '#274553' : '#cbd5e1',
            }}
          />
        </button>
      </div>

      {/* Mobile Menu - dark panel with staggered animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          backgroundColor: '#1f2528',
          borderBottom: menuOpen ? '1px solid rgba(39, 69, 83, 0.2)' : 'none',
        }}
      >
        <ul className="flex flex-col px-6 py-8 gap-6">
          {[
            { label: 'Skills', number: '02' },
            { label: 'Experience', number: '03' },
            { label: 'Projects', number: '04' },
            { label: 'Contact', number: '05' },
          ].map((item, index) => (
            <li 
              key={item.label}
              className="transform transition-all duration-300"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(-10px)',
                transitionDelay: menuOpen ? `${index * 75}ms` : '0ms',
              }}
            >
              <a
                href={`#${item.label.toLowerCase()}`}
                className="flex items-baseline gap-3 group"
                onClick={() => setMenuOpen(false)}
              >
                {/* Number */}
                <span 
                  className="text-xs font-black uppercase tracking-[0.2em] transition-colors duration-300"
                  style={{ color: '#64748b' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#274553';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#64748b';
                  }}
                >
                  {item.number}
                </span>
                
                {/* Label */}
                <span
                  className="text-xl font-bold uppercase tracking-wide transition-colors duration-300"
                  style={{ 
                    color: '#cbd5e1',
                    letterSpacing: '0.05em',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#274553';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#cbd5e1';
                  }}
                >
                  {item.label}
                </span>
              </a>
            </li>
          ))}
          
          {/* Mobile-only availability indicator */}
          <li className="pt-6 mt-6 border-t" style={{ borderColor: 'rgba(39, 69, 83, 0.2)' }}>
            <div className="flex items-center gap-2">
              <span 
                className="flex h-2 w-2 rounded-full"
                style={{
                  backgroundColor: '#274553',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                }}
              />
              <span 
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: '#64748b' }}
              >
                Available for Work
              </span>
            </div>
          </li>
        </ul>
      </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        /* Ensure Epilogue font is loaded */
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>
    </nav>
  );
}