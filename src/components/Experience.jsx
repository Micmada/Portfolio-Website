export default function Experience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "ARM",
      location: "Cambridge",
      period: "June 2023 – March 2025",
      description: "Developed and automated tools for generating the ARM Architecture Reference Manual, contributing to cutting-edge software platforms that met industry standards for efficiency, performance, and test coverage.",
      bullets: [
        "Applied Object-Oriented Programming (OOP) in Python to improve automation processes, enhancing workflow efficiency and accuracy.",
        "Updated, fixed, and enhanced in-house software platforms.",
        "Worked in an Agile environment, using Gerrit for code reviews and Jenkins to establish a continuous integration pipeline, speeding up build and test processes.",
        "Gained hands-on experience with large-scale software systems and automated documentation flows."
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="w-full py-20 sm:py-24"
      style={{ 
        backgroundColor: '#FAFAFA', 
        color: '#1A1A1A', 
        scrollMarginTop: '80px' 
      }}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-16">
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
              Career Journey
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ color: '#1A1A1A' }}
          >
            Experience<span style={{ color: '#FF6B6B' }}>.</span>
          </h2>
        </div>

        {/* Experience timeline */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative group"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${idx * 100}ms`,
              }}
            >
              {/* Timeline connector - only show if not last item */}
              {idx < experiences.length - 1 && (
                <div 
                  className="absolute left-0 top-12 w-px h-full hidden sm:block"
                  style={{ backgroundColor: '#E0E0E0' }}
                />
              )}

              <div className="relative sm:pl-12">
                {/* Timeline dot */}
                <div 
                  className="absolute left-0 top-2 w-3 h-3 rounded-full border-2 hidden sm:block transition-all duration-300 group-hover:scale-150"
                  style={{ 
                    backgroundColor: '#FAFAFA',
                    borderColor: '#FF6B6B'
                  }}
                />

                {/* Content */}
                <div className="space-y-4">
                  {/* Header */}
                  <div>
                    <h3 
                      className="text-2xl sm:text-3xl font-bold mb-2"
                      style={{ color: '#1A1A1A' }}
                    >
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 text-sm font-medium mb-2">
                      <span style={{ color: '#FF6B6B' }}>
                        {exp.company}
                      </span>
                      <span className="hidden sm:inline" style={{ color: '#E0E0E0' }}>•</span>
                      <span style={{ color: '#666666' }}>
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-sm tracking-wide" style={{ color: '#888888' }}>
                      {exp.period}
                    </p>
                  </div>

                  {/* Description */}
                  <p 
                    className="text-base leading-relaxed max-w-3xl"
                    style={{ color: '#444444' }}
                  >
                    {exp.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-3 max-w-3xl">
                    {exp.bullets.map((bullet, i) => (
                      <li 
                        key={i} 
                        className="flex gap-3 text-sm leading-relaxed"
                        style={{ color: '#666666' }}
                      >
                        <span 
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: '#FF6B6B' }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
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