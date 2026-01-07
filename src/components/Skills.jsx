export default function Skills() {
  const skills = {
    Languages: ['Python', 'JavaScript', 'Go', 'SQL', 'HTML', 'CSS'],
    Technologies: [
      'React',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB / Mongoose',
      'Flask',
      'Django',
      'Streamlit',
      'Git / GitHub',
      'Jenkins',
      'Gerrit'
    ],
    Other: [
      'Object-Oriented Programming (OOP)',
      'RESTful API design',
      'Data Analysis & Visualization',
      'Agile / Scrum methodology',
      'Test automation / Unit testing',
      'Continuous Integration / Deployment',
      'Version control workflows'
    ],
  };

  return (
    <section
      id="skills"
      className="w-full py-20 sm:py-24"
      style={{ 
        backgroundColor: '#FFFFFF', 
        color: '#1A1A1A', 
        scrollMarginTop: '80px' 
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div 
              className="w-12 h-px"
              style={{ backgroundColor: '#FF6B6B' }}
            />
            <span 
              className="text-xs tracking-[0.3em] uppercase font-medium"
              style={{ color: '#888888' }}
            >
              What I Work With
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ color: '#1A1A1A' }}
          >
            Skills<span style={{ color: '#FF6B6B' }}>.</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={category}
              className="group"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Category header */}
              <div className="mb-6">
                <h3
                  className="text-sm tracking-[0.2em] uppercase font-semibold mb-2"
                  style={{ color: '#888888' }}
                >
                  {category}
                </h3>
                <div 
                  className="w-12 h-px transition-all duration-300 group-hover:w-20"
                  style={{ backgroundColor: '#FF6B6B' }}
                />
              </div>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-4 py-2 rounded-full font-medium border transition-all duration-300"
                    style={{ 
                      backgroundColor: 'transparent',
                      borderColor: '#E0E0E0',
                      color: '#666666'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = '#FF6B6B';
                      e.target.style.backgroundColor = '#FF6B6B';
                      e.target.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = '#E0E0E0';
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = '#666666';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}