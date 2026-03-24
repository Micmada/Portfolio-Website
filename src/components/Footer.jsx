export default function Footer() {
  return (
    <footer
      className="py-12 border-t relative"
      style={{
        backgroundColor: '#151a1d',
        borderColor: 'rgba(39, 69, 83, 0.2)',
        position: 'relative',
        zIndex: '1',
      }}
    >
      {/* Subtle blueprint grid pattern */}
      <div className="blueprint-bg blueprint-bg--footer" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          {/* Left section - 8 columns */}
          <div className="md:col-span-8 space-y-6">
            {/* Logo/Monogram */}
            <div className="flex items-center gap-3">
              <div className="monogram">ME</div>
              <div>
                <div className="text-sm font-bold uppercase tracking-[0.15em]" style={{ color: '#cbd5e1' }}>
                  Michael Eddleston
                </div>
                <div className="footer-role text-xs font-medium" style={{ color: '#64748b' }}>
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
                  className="text-sm font-medium uppercase tracking-wide text-link transition-colors duration-300"
                  style={{ letterSpacing: '0.05em' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right section - 4 columns */}
          <div className="md:col-span-4 space-y-4">
            <span className="micro-label block">Connect</span>
            <div className="space-y-2">
              <a
                href="https://github.com/Micmada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-link--secondary transition-colors duration-300"
              >
                <span>GitHub</span>
                <span style={{ fontSize: '12px', fontWeight: '900' }}>→</span>
              </a>
              <a
                href="https://www.linkedin.com/in/michael-eddleston-4867a1214/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-link--secondary transition-colors duration-300"
              >
                <span>LinkedIn</span>
                <span style={{ fontSize: '12px', fontWeight: '900' }}>→</span>
              </a>
              <a
                href="mailto:michael.eddleston@icloud.com"
                className="flex items-center gap-2 text-sm font-medium text-link--secondary transition-colors duration-300"
              >
                <span>Email</span>
                <span style={{ fontSize: '12px', fontWeight: '900' }}>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ backgroundColor: 'rgba(39, 69, 83, 0.2)' }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium" style={{ color: '#64748b' }}>
              © {new Date().getFullYear()}
            </span>
            <span className="text-xs font-medium" style={{ color: '#94a3b8' }}>
              Michael Eddleston. All rights reserved.
            </span>
          </div>

          {/* Crafted with */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium" style={{ color: '#94a3b8' }}>
              Designed &amp; built with
            </span>
            <span className="text-xs font-bold" style={{ color: '#274553' }}>
              precision
            </span>
          </div>
        </div>

        {/* Specification note */}
        <div
          className="mt-6 pt-6 border-t flex items-center justify-between"
          style={{ borderColor: 'rgba(39, 69, 83, 0.1)' }}
        >
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="micro-label">Built With</span>
              <span className="footer-built-with text-xs font-medium" style={{ color: '#94a3b8' }}>
                React • Next.js • Tailwind
              </span>
            </div>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="scroll-top-btn flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300"
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
    </footer>
  );
}
