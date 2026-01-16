export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center px-6 relative overflow-hidden"
      style={{
        backgroundColor: '#151a1d',
        color: '#ffffff',
        paddingTop: '80px',
        boxSizing: 'border-box',
      }}
    >
      {/* Blueprint grid pattern background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#274553 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Subtle gradient sweep */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: 'linear-gradient(135deg, #274553 0%, transparent 50%)',
        }}
      />

      {/* Main content container - max 1200px */}
      <div className="max-w-[1200px] w-full mx-auto relative z-10">
        {/* Status indicator with pulse */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-12 rounded-full"
          style={{
            backgroundColor: 'rgba(39, 69, 83, 0.1)',
            border: '1px solid rgba(39, 69, 83, 0.2)',
          }}
        >
          <span 
            className="flex h-2 w-2 rounded-full"
            style={{
              backgroundColor: '#274553',
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }}
          />
          <span 
            className="font-bold uppercase tracking-[0.2em]"
            style={{
              fontSize: '10px',
              color: '#274553',
            }}
          >
            Available for Opportunities
          </span>
        </div>

        {/* Section label - numbered system */}
        <div className="flex items-center gap-4 mb-6">
          <span 
            className="font-black uppercase tracking-[0.4em]"
            style={{
              fontSize: '12px',
              color: '#274553',
            }}
          >
            01. Introduction
          </span>
          <div 
            className="h-px flex-1 max-w-[100px]"
            style={{ backgroundColor: 'rgba(39, 69, 83, 0.2)' }}
          />
        </div>

        {/* Main headline - dramatic scale and tracking */}
        <h1 
          className="font-black uppercase mb-4"
          style={{
            fontSize: 'clamp(3.5rem, 12vw, 8rem)',
            lineHeight: '0.9',
            letterSpacing: '-0.03em',
            color: '#ffffff',
            fontFamily: "'Epilogue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          Michael
          <br />
          Eddleston
        </h1>

        {/* Role with accent */}
        <div className="mb-8">
          <h2 
            className="text-2xl sm:text-3xl font-light tracking-wide"
            style={{ 
              color: '#cbd5e1', // slate-300
              fontFamily: "'Epilogue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            }}
          >
            Software Engineer
            <span style={{ color: '#274553' }}> / </span>
            <span style={{ color: '#94a3b8' }}>Full-Stack Developer</span>
          </h2>
        </div>
        
        {/* Description - generous leading */}
        <p 
          className="text-lg leading-relaxed mb-12 max-w-2xl"
          style={{ 
            color: '#94a3b8', // slate-400
            fontFamily: "'Epilogue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          Building scalable systems and elegant interfaces from blueprint to deployment. 
          Specialized in Python automation, React ecosystems, and transforming complex 
          technical requirements into production-ready solutions.
        </p>

        {/* Arsenal - tech stack with micro labels */}
        <div className="mb-16">
          <div className="mb-4">
            <span 
              className="font-bold uppercase tracking-[0.3em]"
              style={{
                fontSize: '10px',
                color: '#64748b', // slate-500
              }}
            >
              Arsenal
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              'Python', 
              'TypeScript', 
              'React', 
              'Node.js',
              'PostgreSQL',
              'System Design'
            ].map((tech, i) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium rounded transition-all duration-300"
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(39, 69, 83, 0.2)',
                  color: '#cbd5e1',
                  fontFamily: "'Epilogue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(39, 69, 83, 0.4)';
                  e.currentTarget.style.backgroundColor = 'rgba(39, 69, 83, 0.05)';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(39, 69, 83, 0.2)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs - primary and secondary pattern */}
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-8 py-4 text-base font-bold uppercase tracking-wide transition-all duration-300"
            style={{ 
              backgroundColor: '#274553',
              color: '#ffffff',
              fontFamily: "'Epilogue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: '14px',
              letterSpacing: '0.1em',
            }}
            onMouseEnter={(e) => { 
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.backgroundColor = '#2f5563';
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.backgroundColor = '#274553';
            }}
          >
            <span>View Projects</span>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none"
              className="transition-transform duration-300"
              style={{
                transform: 'translateX(0)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(4px)';
              }}
            >
              <path 
                d="M1 8h14M9 1l7 7-7 7" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
          
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold uppercase tracking-wide transition-all duration-300"
            style={{ 
              backgroundColor: 'transparent',
              color: '#cbd5e1',
              border: '1px solid rgba(39, 69, 83, 0.2)',
              fontFamily: "'Epilogue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontSize: '14px',
              letterSpacing: '0.1em',
            }}
            onMouseEnter={(e) => { 
              e.currentTarget.style.borderColor = 'rgba(39, 69, 83, 0.4)';
              e.currentTarget.style.color = '#274553';
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.borderColor = 'rgba(39, 69, 83, 0.2)';
              e.currentTarget.style.color = '#cbd5e1';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Specifications callout - architectural detail */}
        <div 
          className="absolute bottom-12 right-0 hidden lg:flex flex-col gap-1 px-6 py-4"
          style={{
            backgroundColor: 'rgba(39, 69, 83, 0.1)',
            borderLeft: '2px solid rgba(39, 69, 83, 0.3)',
          }}
        >
          <span 
            className="font-bold uppercase tracking-[0.3em] mb-2"
            style={{
              fontSize: '10px',
              color: '#64748b',
            }}
          >
            Specifications
          </span>
          <div className="flex items-center gap-2">
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>Location</span>
            <span style={{ fontSize: '12px', color: '#cbd5e1', fontWeight: '600' }}>UK-Based</span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>Experience</span>
            <span style={{ fontSize: '12px', color: '#cbd5e1', fontWeight: '600' }}>14mo+ Industry</span>
          </div>
          <div className="flex items-center gap-2">
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>Status</span>
            <span style={{ fontSize: '12px', color: '#274553', fontWeight: '700' }}>Active</span>
          </div>
        </div>
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
    </section>
  );
}