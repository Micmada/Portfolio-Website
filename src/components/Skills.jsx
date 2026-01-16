export default function Skills() {
  const skills = {
    Languages: ['Python', 'JavaScript', 'TypeScript', 'Go', 'SQL', 'HTML/CSS'],
    'Frameworks & Libraries': [
      'React',
      'React Native',
      'Node.js',
      'Express',
      'Flask',
      'Django',
      'Tailwind CSS',
      'Prisma ORM',
    ],
    'Tools & Platforms': [
      'Git / GitHub',
      'PostgreSQL',
      'MongoDB',
      'Jenkins',
      'Gerrit',
      'Docker',
      'AWS',
      'Streamlit',
    ],
    'Methodologies': [
      'RESTful API Design',
      'Object-Oriented Programming',
      'Test-Driven Development',
      'CI/CD Pipelines',
      'Agile / Scrum',
      'System Architecture',
      'Data Modeling',
    ],
  };

  return (
    <section
      id="skills"
      className="w-full py-24 relative overflow-hidden"
      style={{ 
        backgroundColor: '#151a1d',
        color: '#ffffff', 
        scrollMarginTop: '80px',
        fontFamily: "'Epilogue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
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
              02. Skills
            </span>
            <div 
              className="h-px flex-1 max-w-[100px]"
              style={{ backgroundColor: 'rgba(39, 69, 83, 0.2)' }}
            />
          </div>

          {/* Section title */}
          <h2
            className="font-black uppercase mb-4"
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: '0.9',
              letterSpacing: '-0.03em',
              color: '#ffffff',
            }}
          >
            Technical
            <br />
            Capabilities
          </h2>

          {/* Description */}
          <p 
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: '#94a3b8' }}
          >
            A comprehensive toolkit spanning multiple languages, frameworks, and methodologies—
            developed through academic training and industrial application.
          </p>
        </div>

        {/* Asymmetrical grid layout - 12 column system */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {Object.entries(skills).map(([category, items], index) => {
            // Create asymmetrical column spans
            const columnSpans = [
              'lg:col-span-5',  // Languages - smaller
              'lg:col-span-7',  // Frameworks - larger
              'lg:col-span-6',  // Tools - medium
              'lg:col-span-6',  // Methodologies - medium
            ];

            return (
              <div
                key={category}
                className={`group ${columnSpans[index]}`}
                style={{
                  opacity: 0,
                  animation: `fadeInUp 0.6s ease-out forwards`,
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Category card with glass effect */}
                <div 
                  className="h-full p-6 transition-all duration-500"
                  style={{
                    backgroundColor: '#1f2528',
                    border: '1px solid rgba(39, 69, 83, 0.2)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(39, 69, 83, 0.4)';
                    e.currentTarget.style.backgroundColor = 'rgba(31, 37, 40, 0.8)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(39, 69, 83, 0.2)';
                    e.currentTarget.style.backgroundColor = '#1f2528';
                  }}
                >
                  {/* Category header with micro label */}
                  <div className="mb-6">
                    {/* Number indicator */}
                    <span 
                      className="inline-block font-bold uppercase tracking-[0.3em] mb-2"
                      style={{
                        fontSize: '10px',
                        color: '#64748b',
                      }}
                    >
                      0{index + 1}
                    </span>
                    
                    {/* Category name */}
                    <h3
                      className="text-xl font-black uppercase tracking-wide mb-3"
                      style={{ 
                        color: '#ffffff',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {category}
                    </h3>
                    
                    {/* Accent line */}
                    <div 
                      className="w-12 h-px transition-all duration-500 group-hover:w-24"
                      style={{ backgroundColor: '#274553' }}
                    />
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="text-sm px-3 py-1.5 rounded font-medium transition-all duration-300"
                        style={{ 
                          backgroundColor: 'transparent',
                          border: '1px solid rgba(39, 69, 83, 0.3)',
                          color: '#cbd5e1',
                          fontSize: '13px',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#274553';
                          e.currentTarget.style.backgroundColor = 'rgba(39, 69, 83, 0.1)';
                          e.currentTarget.style.color = '#274553';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(39, 69, 83, 0.3)';
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#cbd5e1';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Skill count indicator - architectural detail */}
                  <div className="mt-6 pt-4 border-t" style={{ borderColor: 'rgba(39, 69, 83, 0.2)' }}>
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-xs font-bold uppercase tracking-[0.2em]"
                        style={{ color: '#64748b' }}
                      >
                        Proficiencies
                      </span>
                      <span 
                        className="text-sm font-bold"
                        style={{ color: '#274553' }}
                      >
                        {items.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom specification callout */}
        <div 
          className="mt-16 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{
            backgroundColor: 'rgba(39, 69, 83, 0.05)',
            borderLeft: '3px solid #274553',
          }}
        >
          <div>
            <span 
              className="block font-bold uppercase tracking-[0.3em] mb-2"
              style={{
                fontSize: '10px',
                color: '#64748b',
              }}
            >
              Core Competency
            </span>
            <p 
              className="text-base leading-relaxed"
              style={{ color: '#cbd5e1' }}
            >
              Full-stack development with emphasis on scalable backend systems, 
              modern frontend frameworks, and automated deployment pipelines.
            </p>
          </div>
          
          <div className="flex items-center gap-3 whitespace-nowrap">
            <div className="text-right">
              <div 
                className="text-3xl font-black"
                style={{ color: '#274553' }}
              >
                {Object.values(skills).flat().length}
              </div>
              <div 
                className="text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: '#64748b' }}
              >
                Total Skills
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Ensure Epilogue font is loaded */
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>
    </section>
  );
}