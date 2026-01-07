export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center px-4 sm:px-8 lg:px-16 relative overflow-hidden"
      style={{
        backgroundColor: '#FAFAFA',
        color: '#1A1A1A',
        paddingTop: '80px',
        boxSizing: 'border-box',
      }}
    >
      {/* Floating geometric shapes - unique decorative elements */}
      <div 
        className="absolute top-20 right-10 w-32 h-32 rounded-full opacity-10"
        style={{
          background: 'linear-gradient(135deg, #FF6B6B, #FFE66D)',
          animation: 'float 6s ease-in-out infinite',
        }}
      />
      <div 
        className="absolute bottom-32 left-10 w-24 h-24 opacity-10"
        style={{
          background: 'linear-gradient(135deg, #4ECDC4, #556270)',
          borderRadius: '20px',
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '2s',
        }}
      />
      
      {/* Subtle vertical line accent */}
      <div 
        className="absolute left-0 top-1/4 w-1 h-1/2 opacity-20"
        style={{
          background: 'linear-gradient(to bottom, transparent, #FF6B6B, transparent)',
        }}
      />

      {/* Main content - asymmetric layout */}
      <div className="max-w-5xl w-full">
        {/* Small accent text */}
        <div className="flex items-center gap-3 mb-8">
          <div 
            className="w-12 h-px"
            style={{ backgroundColor: '#FF6B6B' }}
          />
          <span 
            className="text-xs tracking-[0.3em] uppercase font-medium"
            style={{ color: '#888888' }}
          >
            Portfolio 2026
          </span>
        </div>

        {/* Main heading - large, bold, minimalist */}
        <h1 
          className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 leading-[0.9] tracking-tight"
          style={{ color: '#1A1A1A' }}
        >
          Michael Eddleston<span style={{ color: '#FF6B6B' }}>.</span>
        </h1>

        {/* Role with animated underline */}
        <div className="inline-block mb-8">
          <h2 
            className="text-2xl sm:text-3xl font-light mb-2"
            style={{ color: '#444444' }}
          >
            Software Engineer
          </h2>
          <div 
            className="h-0.5 w-0"
            style={{
              backgroundColor: '#FF6B6B',
              animation: 'expandWidth 1.5s ease-out forwards',
            }}
          />
        </div>
        
        {/* Description - clean and spaced */}
        <p 
          className="text-lg sm:text-xl max-w-2xl leading-relaxed mb-12 font-light"
          style={{ color: '#666666' }}
        >
          Crafting elegant solutions through code. Specializing in scalable architecture, 
          clean design patterns, and transforming complex problems into intuitive software experiences.
        </p>

        {/* Tech stack - minimal pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {['Python', 'JavaScript', 'React', 'System Design'].map((tech, i) => (
            <span
              key={tech}
              className="px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300"
              style={{
                backgroundColor: 'transparent',
                borderColor: '#E0E0E0',
                color: '#666666',
                animationDelay: `${i * 100}ms`,
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#FF6B6B';
                e.target.style.color = '#FF6B6B';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = '#E0E0E0';
                e.target.style.color = '#666666';
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA - single minimal button */}
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <a
            href="#projects"
            className="group relative px-8 py-4 text-base font-medium transition-all duration-300 overflow-hidden"
            style={{ 
              backgroundColor: '#1A1A1A',
              color: '#FFFFFF',
            }}
            onMouseEnter={(e) => { 
              e.target.style.backgroundColor = '#FF6B6B';
            }}
            onMouseLeave={(e) => { 
              e.target.style.backgroundColor = '#1A1A1A';
            }}
          >
            <span className="relative z-10">Explore Work</span>
          </a>
          
          <a
            href="#contact"
            className="px-8 py-4 text-base font-medium transition-all duration-300"
            style={{ 
              backgroundColor: 'transparent',
              color: '#1A1A1A',
              textDecoration: 'underline',
              textDecorationColor: 'transparent',
              textUnderlineOffset: '4px',
            }}
            onMouseEnter={(e) => { 
              e.target.style.textDecorationColor = '#FF6B6B';
              e.target.style.color = '#FF6B6B';
            }}
            onMouseLeave={(e) => { 
              e.target.style.textDecorationColor = 'transparent';
              e.target.style.color = '#1A1A1A';
            }}
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator - minimal */}
        <div className="absolute bottom-12 right-8 sm:right-16 flex flex-col items-center gap-2 opacity-40">
          <div 
            className="w-px h-16"
            style={{ 
              backgroundColor: '#1A1A1A',
              animation: 'scrollLine 2s ease-in-out infinite',
            }}
          />
          <span className="text-xs tracking-widest" style={{ writingMode: 'vertical-rl', color: '#1A1A1A' }}>
            SCROLL
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes expandWidth {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes scrollLine {
          0%, 100% { height: 64px; }
          50% { height: 32px; }
        }
      `}</style>
    </section>
  );
}