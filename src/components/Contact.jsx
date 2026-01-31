export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ 
        backgroundColor: '#151a1d',
        color: '#ffffff', 
        scrollMarginTop: '80px',
        fontFamily: "'Epilogue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        position: 'relative',
        zIndex: '1',
      }}
    >
      {/* Blueprint grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#274553 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section header - numbered system */}
        <div className="mb-16">
          {/* Section number and label */}
          <div className="flex items-center gap-4 mb-6">
            <span 
              className="font-black uppercase tracking-[0.4em]"
              style={{
                fontSize: '12px',
                color: '#274553',
              }}
            >
              05. Connect
            </span>
            <div 
              className="h-px flex-1 max-w-[100px]"
              style={{ backgroundColor: 'rgba(39, 69, 83, 0.2)' }}
            />
          </div>

          {/* Section title */}
          <h2
            className="font-black uppercase mb-6"
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: '0.9',
              letterSpacing: '-0.03em',
              color: '#ffffff',
            }}
          >
            Let's Work
            <br />
            Together
          </h2>

          {/* Description */}
          <p 
            className="text-lg leading-relaxed max-w-2xl mb-4"
            style={{ color: '#94a3b8' }}
          >
            I'm actively seeking graduate software engineering opportunities. If you're looking for 
            a passionate developer who's eager to learn, contribute, and grow with your team, 
            I'd love to hear from you.
          </p>

          {/* Availability indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mt-4 rounded-full"
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
              Available Immediately
            </span>
          </div>
        </div>

        {/* Contact grid - asymmetric 8+4 layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main contact card - 8 columns */}
          <div className="lg:col-span-8">
            <div 
              className="p-8 transition-all duration-500"
              style={{
                backgroundColor: '#1f2528',
                border: '1px solid rgba(39, 69, 83, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(39, 69, 83, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(39, 69, 83, 0.2)';
              }}
            >
              {/* Primary contact method */}
              <span 
                className="block font-bold uppercase tracking-[0.3em] mb-6"
                style={{
                  fontSize: '10px',
                  color: '#64748b',
                }}
              >
                Primary Contact
              </span>

              <div className="space-y-6">
                {/* Email */}
                <div>
                  <label 
                    className="block text-xs font-bold uppercase tracking-[0.2em] mb-2"
                    style={{ color: '#64748b' }}
                  >
                    Email Address
                  </label>
                  <a
                    href="mailto:michael.eddleston@icloud.com"
                    className="block text-2xl font-black transition-colors duration-300 group"
                    style={{ 
                      color: '#ffffff',
                      letterSpacing: '-0.02em',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#274553';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#ffffff';
                    }}
                  >
                    michael.eddleston@icloud.com
                    <span 
                      className="inline-block ml-2 transition-transform duration-300"
                      style={{ fontSize: '20px' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                    >
                      →
                    </span>
                  </a>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href="mailto:michael.eddleston@icloud.com"
                    className="inline-flex items-center gap-3 px-8 py-4 font-bold uppercase tracking-wide transition-all duration-300"
                    style={{ 
                      backgroundColor: '#274553',
                      color: '#ffffff',
                      fontSize: '14px',
                      letterSpacing: '0.1em',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#2f5563';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#274553';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <span>Send Email</span>
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 16 16" 
                      fill="none"
                      className="transition-transform duration-300"
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
                </div>
              </div>

              {/* Response time note */}
              <div 
                className="mt-8 pt-6 border-t"
                style={{ borderColor: 'rgba(39, 69, 83, 0.2)' }}
              >
                <div className="flex items-start gap-3">
                  <span 
                    style={{ 
                      color: '#274553',
                      fontSize: '16px',
                      fontWeight: '900',
                      marginTop: '2px',
                    }}
                  >
                    →
                  </span>
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ color: '#94a3b8' }}
                  >
                    I typically respond within 24 hours. Looking forward to discussing how I can 
                    contribute to your team's success.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar info - 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            {/* Location card */}
            <div 
              className="p-6"
              style={{
                backgroundColor: 'rgba(39, 69, 83, 0.1)',
                border: '1px solid rgba(39, 69, 83, 0.2)',
              }}
            >
              <span 
                className="block font-bold uppercase tracking-[0.3em] mb-3"
                style={{
                  fontSize: '10px',
                  color: '#64748b',
                }}
              >
                Location
              </span>
              <div 
                className="text-2xl font-black mb-2"
                style={{ color: '#274553' }}
              >
                Milton Keynes, UK
              </div>
              <p 
                className="text-sm"
                style={{ color: '#94a3b8' }}
              >
                Open to relocation
              </p>
            </div>

            {/* Links card */}
            <div 
              className="p-6"
              style={{
                backgroundColor: '#1f2528',
                border: '1px solid rgba(39, 69, 83, 0.2)',
              }}
            >
              <span 
                className="block font-bold uppercase tracking-[0.3em] mb-4"
                style={{
                  fontSize: '10px',
                  color: '#64748b',
                }}
              >
                Online Presence
              </span>
              
              <div className="space-y-3">
                <a
                  href="https://github.com/michaeleddleston"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group transition-all duration-300 p-2 -mx-2"
                  style={{ color: '#cbd5e1' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(39, 69, 83, 0.1)';
                    e.currentTarget.style.color = '#274553';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#cbd5e1';
                  }}
                >
                  <span className="text-sm font-medium">GitHub</span>
                  <span style={{ fontSize: '14px', fontWeight: '900' }}>→</span>
                </a>

                <a
                  href="https://linkedin.com/in/michaeleddleston"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group transition-all duration-300 p-2 -mx-2"
                  style={{ color: '#cbd5e1' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(39, 69, 83, 0.1)';
                    e.currentTarget.style.color = '#274553';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#cbd5e1';
                  }}
                >
                  <span className="text-sm font-medium">LinkedIn</span>
                  <span style={{ fontSize: '14px', fontWeight: '900' }}>→</span>
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group transition-all duration-300 p-2 -mx-2"
                  style={{ color: '#cbd5e1' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(39, 69, 83, 0.1)';
                    e.currentTarget.style.color = '#274553';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#cbd5e1';
                  }}
                >
                  <span className="text-sm font-medium">Resume/CV</span>
                  <span style={{ fontSize: '14px', fontWeight: '900' }}>→</span>
                </a>
              </div>
            </div>

            {/* Interests/Note card */}
            <div 
              className="p-6 border-2 border-dashed"
              style={{
                borderColor: 'rgba(39, 69, 83, 0.2)',
              }}
            >
              <span 
                className="block font-bold uppercase tracking-[0.3em] mb-3"
                style={{
                  fontSize: '10px',
                  color: '#64748b',
                }}
              >
                Interests
              </span>
              <p 
                className="text-sm leading-relaxed"
                style={{ color: '#94a3b8' }}
              >
                Backend systems, automation, full-stack development, and continuous learning
              </p>
            </div>
          </div>
        </div>

        {/* Bottom callout */}
        <div 
          className="mt-16 p-6"
          style={{
            backgroundColor: 'rgba(39, 69, 83, 0.05)',
            borderLeft: '3px solid #274553',
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span 
                className="block font-bold uppercase tracking-[0.3em] mb-2"
                style={{
                  fontSize: '10px',
                  color: '#64748b',
                }}
              >
                Current Status
              </span>
              <p 
                className="text-base font-medium"
                style={{ color: '#cbd5e1' }}
              >
                Actively interviewing for software engineering roles
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <span 
                className="flex h-2 w-2 rounded-full"
                style={{
                  backgroundColor: '#274553',
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                }}
              />
              <span 
                className="text-sm font-bold"
                style={{ color: '#274553' }}
              >
                Seeking opportunities
              </span>
            </div>
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