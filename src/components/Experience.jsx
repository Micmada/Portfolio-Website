export default function Experience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "ARM",
      location: "Cambridge, UK",
      period: "June 2023 – March 2025",
      duration: "14 months",
      description: "Developed and automated tools for generating the ARM Architecture Reference Manual, contributing to cutting-edge software platforms that met industry standards for efficiency, performance, and test coverage. Participated in decision-making for projects of various sizes, focusing on modern technologies and software development best practices.",
      bullets: [
        "Architected Python automation system to replace legacy documentation pipeline, reducing processing time from 1 week to under 24 hours for 20,000+ page technical specifications; delivered 2x efficiency improvement in production environment",
        "Debugged and resolved critical production issues identified in senior engineers' code, maintaining system stability for enterprise-scale documentation generation workflows",
        "Collaborated in Agile environment using Gerrit for code reviews and Jenkins for CI/CD, contributing to modernization of legacy systems processing machine-readable architecture specifications",
        "Gained hands-on experience developing large-scale document automation systems handling complex technical specifications for industry-standard ARM architecture documentation"
      ],
      technologies: ['Python', 'Jenkins', 'Gerrit', 'Git', 'Linux', 'Automation']
    }
  ];

  return (
    <section
      id="experience"
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
              03. Foundations
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
            Professional
            <br />
            Experience
          </h2>

          {/* Description */}
          <p 
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: '#94a3b8' }}
          >
            Industrial experience spanning enterprise-scale systems, automation pipelines, 
            and production infrastructure at a leading semiconductor company.
          </p>
        </div>

        {/* Experience entries - asymmetric 12-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="lg:col-span-12"
              style={{
                opacity: 0,
                animation: `fadeInUp 0.6s ease-out forwards`,
                animationDelay: `${idx * 100}ms`,
              }}
            >
              {/* Main experience card - 8 columns */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Primary content card */}
                <div 
                  className="lg:col-span-8 p-8 group transition-all duration-500"
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
                  {/* Header with timeline indicator */}
                  <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b" style={{ borderColor: 'rgba(39, 69, 83, 0.2)' }}>
                    <div className="flex-1">
                      {/* Role title */}
                      <h3 
                        className="text-3xl font-black uppercase tracking-wide mb-3"
                        style={{ 
                          color: '#ffffff',
                          lineHeight: '1.1',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {exp.title}
                      </h3>
                      
                      {/* Company and location */}
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span 
                          className="text-lg font-bold"
                          style={{ color: '#274553' }}
                        >
                          {exp.company}
                        </span>
                        <span style={{ color: 'rgba(39, 69, 83, 0.4)' }}>—</span>
                        <span 
                          className="text-base font-medium"
                          style={{ color: '#cbd5e1' }}
                        >
                          {exp.location}
                        </span>
                      </div>

                      {/* Period */}
                      <p 
                        className="text-sm font-medium tracking-wide"
                        style={{ color: '#64748b' }}
                      >
                        {exp.period}
                      </p>
                    </div>

                    {/* Timeline dot indicator */}
                    <div 
                      className="w-3 h-3 rounded-full mt-2 transition-all duration-300 group-hover:scale-150"
                      style={{ 
                        backgroundColor: '#274553',
                        boxShadow: '0 0 0 4px rgba(39, 69, 83, 0.1)',
                      }}
                    />
                  </div>

                  {/* Description */}
                  <p 
                    className="text-base leading-relaxed mb-6"
                    style={{ color: '#94a3b8' }}
                  >
                    {exp.description}
                  </p>

                  {/* Key achievements */}
                  <div className="space-y-4">
                    <span 
                      className="block font-bold uppercase tracking-[0.3em] mb-4"
                      style={{
                        fontSize: '10px',
                        color: '#64748b',
                      }}
                    >
                      Key Achievements
                    </span>
                    
                    <ul className="space-y-4">
                      {exp.bullets.map((bullet, i) => (
                        <li 
                          key={i} 
                          className="flex gap-4 text-sm leading-relaxed group/item"
                        >
                          {/* Custom bullet */}
                          <span 
                            className="mt-1.5 flex-shrink-0 transition-all duration-300"
                            style={{ 
                              color: '#274553',
                              fontSize: '12px',
                              fontWeight: '900',
                            }}
                          >
                            →
                          </span>
                          <span style={{ color: '#cbd5e1' }}>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies used */}
                  <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(39, 69, 83, 0.2)' }}>
                    <span 
                      className="block font-bold uppercase tracking-[0.3em] mb-3"
                      style={{
                        fontSize: '10px',
                        color: '#64748b',
                      }}
                    >
                      Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded font-medium transition-all duration-300"
                          style={{ 
                            backgroundColor: 'transparent',
                            border: '1px solid rgba(39, 69, 83, 0.3)',
                            color: '#cbd5e1',
                            fontSize: '11px',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#274553';
                            e.currentTarget.style.backgroundColor = 'rgba(39, 69, 83, 0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(39, 69, 83, 0.3)';
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar specifications - 4 columns */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Duration card */}
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
                      Duration
                    </span>
                    <div 
                      className="text-4xl font-black mb-2"
                      style={{ color: '#274553' }}
                    >
                      {exp.duration}
                    </div>
                    <p 
                      className="text-sm"
                      style={{ color: '#94a3b8' }}
                    >
                      Full-time internship
                    </p>
                  </div>

                  {/* Impact metrics card */}
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
                      Impact Metrics
                    </span>
                    
                    <div className="space-y-4">
                      <div>
                        <div 
                          className="text-2xl font-black mb-1"
                          style={{ color: '#ffffff' }}
                        >
                          24hrs
                        </div>
                        <p 
                          className="text-xs"
                          style={{ color: '#94a3b8' }}
                        >
                          Processing time (from 1 week)
                        </p>
                      </div>

                      <div className="pt-3 border-t" style={{ borderColor: 'rgba(39, 69, 83, 0.2)' }}>
                        <div 
                          className="text-2xl font-black mb-1"
                          style={{ color: '#ffffff' }}
                        >
                          20,000+
                        </div>
                        <p 
                          className="text-xs"
                          style={{ color: '#94a3b8' }}
                        >
                          Pages processed
                        </p>
                      </div>

                      <div className="pt-3 border-t" style={{ borderColor: 'rgba(39, 69, 83, 0.2)' }}>
                        <div 
                          className="text-2xl font-black mb-1"
                          style={{ color: '#ffffff' }}
                        >
                          2x
                        </div>
                        <p 
                          className="text-xs"
                          style={{ color: '#94a3b8' }}
                        >
                          Efficiency improvement
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Coming soon placeholder */}
                  <div 
                    className="p-6 border-2 border-dashed"
                    style={{
                      borderColor: 'rgba(39, 69, 83, 0.2)',
                    }}
                  >
                    <span 
                      className="block font-bold uppercase tracking-[0.3em] mb-2"
                      style={{
                        fontSize: '10px',
                        color: '#64748b',
                      }}
                    >
                      Next Chapter
                    </span>
                    <p 
                      className="text-sm"
                      style={{ color: '#94a3b8' }}
                    >
                      Seeking new opportunities in software engineering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education section - bottom callout */}
        <div 
          className="mt-16 p-6 grid grid-cols-1 md:grid-cols-2 gap-6"
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
              Academic Foundation
            </span>
            <h4 
              className="text-xl font-black uppercase mb-2"
              style={{ color: '#ffffff' }}
            >
              BSc Software Engineering
            </h4>
            <p 
              className="text-sm mb-1"
              style={{ color: '#274553' }}
            >
              University of Winchester
            </p>
            <p 
              className="text-sm"
              style={{ color: '#94a3b8' }}
            >
              2:1 Honours • Graduated 2025
            </p>
          </div>

          <div className="flex items-center justify-end">
            <div className="text-right">
              <span 
                className="block font-bold uppercase tracking-[0.3em] mb-2"
                style={{
                  fontSize: '10px',
                  color: '#64748b',
                }}
              >
                Total Experience
              </span>
              <div 
                className="text-3xl font-black"
                style={{ color: '#274553' }}
              >
                14+ months
              </div>
              <p 
                className="text-sm mt-1"
                style={{ color: '#94a3b8' }}
              >
                Industry experience
              </p>
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