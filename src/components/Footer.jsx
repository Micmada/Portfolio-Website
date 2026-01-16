export default function Footer() {
  return (
    <footer
      className="py-12 border-t relative"
      style={{ 
        backgroundColor: '#151a1d',
        borderColor: 'rgba(39, 69, 83, 0.2)',
        fontFamily: "'Epilogue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Subtle blueprint grid pattern */}
      <div 
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: 'radial-gradient(#274553 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Left section - 8 columns */}
          <div className="md:col-span-8 space-y-6">
            {/* Logo/Monogram */}
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 flex items-center justify-center font-black"
                style={{
                  backgroundColor: 'rgba(39, 69, 83, 0.1)',
                  border: '1px solid rgba(39, 69, 83, 0.3)',
                  color: '#274553',
                  fontSize: '14px',
                  letterSpacing: '-0.05em',
                }}
              >
                ME
              </div>
              <div>
                <div 
                  className="text-sm font-bold uppercase tracking-[0.15em]"
                  style={{ color: '#cbd5e1' }}
                >
                  Michael Eddleston
                </div>
                <div 
                  className="text-xs font-medium"
                  style={{ color: '#64748b' }}
                >
                  Software Engineer
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="flex flex-wrap gap-6">
              {[
                { label: 'Skills', href: '#skills' },
                { label: 'Experience', href: '#experience' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium uppercase tracking-wide transition-colors duration-300"
                  style={{ 
                    color: '#94a3b8',
                    letterSpacing: '0.05em',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#274553';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#94a3b8';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right section - 4 columns */}
          <div className="md:col-span-4 space-y-4">
            <span 
              className="block font-bold uppercase tracking-[0.3em]"
              style={{
                fontSize: '10px',
                color: '#64748b',
              }}
            >
              Connect
            </span>
            <div className="space-y-2">
              <a
                href="https://github.com/Micmada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                style={{ color: '#cbd5e1' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#274553';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#cbd5e1';
                }}
              >
                <span>GitHub</span>
                <span style={{ fontSize: '12px', fontWeight: '900' }}>→</span>
              </a>
              <a
                href="https://www.linkedin.com/in/michael-eddleston-4867a1214/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                style={{ color: '#cbd5e1' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#274553';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#cbd5e1';
                }}
              >
                <span>LinkedIn</span>
                <span style={{ fontSize: '12px', fontWeight: '900' }}>→</span>
              </a>
              <a
                href="mailto:michael.eddleston@icloud.com"
                className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                style={{ color: '#cbd5e1' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#274553';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#cbd5e1';
                }}
              >
                <span>Email</span>
                <span style={{ fontSize: '12px', fontWeight: '900' }}>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div 
          className="h-px mb-6"
          style={{ backgroundColor: 'rgba(39, 69, 83, 0.2)' }}
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-3">
            <span 
              className="text-xs font-medium"
              style={{ color: '#64748b' }}
            >
              © {new Date().getFullYear()}
            </span>
            <span 
              className="text-xs font-medium"
              style={{ color: '#94a3b8' }}
            >
              Michael Eddleston. All rights reserved.
            </span>
          </div>

          {/* Crafted with */}
          <div className="flex items-center gap-2">
            <span 
              className="text-xs font-medium"
              style={{ color: '#94a3b8' }}
            >
              Designed & built with
            </span>
            <span 
              className="text-xs font-bold"
              style={{ color: '#274553' }}
            >
              precision
            </span>
          </div>
        </div>

        {/* Specification note - architectural detail */}
        <div 
          className="mt-6 pt-6 border-t flex items-center justify-between"
          style={{ borderColor: 'rgba(39, 69, 83, 0.1)' }}
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span 
                className="text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{ color: '#64748b' }}
              >
                Built With
              </span>
              <span 
                className="text-xs font-medium"
                style={{ color: '#94a3b8' }}
              >
                React • Next.js • Tailwind
              </span>
            </div>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300"
            style={{ 
              color: '#64748b',
              letterSpacing: '0.1em',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#274553';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#64748b';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>Back to Top</span>
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 12 12" 
              fill="none"
              style={{ transform: 'rotate(-90deg)' }}
            >
              <path 
                d="M1 6h10M7 1l4 5-4 5" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        /* Ensure Epilogue font is loaded */
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>
    </footer>
  );
}