export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 sm:py-32"
      style={{ 
        backgroundColor: '#FAFAFA', 
        color: '#1A1A1A', 
        scrollMarginTop: '80px' 
      }}
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div 
              className="w-12 h-px"
              style={{ backgroundColor: '#FF6B6B' }}
            />
            <span 
              className="text-xs tracking-[0.3em] uppercase font-medium"
              style={{ color: '#888888' }}
            >
              Open to Opportunities
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ color: '#1A1A1A' }}
          >
            Let's Work Together<span style={{ color: '#FF6B6B' }}>.</span>
          </h2>
          <p 
            className="text-lg sm:text-xl max-w-2xl leading-relaxed"
            style={{ color: '#666666' }}
          >
            I'm actively seeking graduate software engineering opportunities. If you're looking for a passionate developer who's eager to learn, contribute, and grow with your team, I'd love to hear from you.
          </p>
        </div>

        {/* Contact options */}
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <a
            href="mailto:michael.eddleston@icloud.com"
            className="px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block"
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
            Send Email
          </a>
          
          <a
            href="mailto:michael.eddleston@icloud.com"
            className="text-base font-medium transition-all duration-300"
            style={{ 
              color: '#666666',
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
              e.target.style.color = '#666666';
            }}
          >
            michael.eddleston@icloud.com
          </a>
        </div>
      </div>
    </section>
  );
}