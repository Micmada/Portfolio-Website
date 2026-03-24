import { c } from '../content.js';

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
      className="section w-full py-24 scroll-mt-20"
    >
      {/* Blueprint grid pattern */}
      <div className="blueprint-bg blueprint-bg--section" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="section-label">02. Skills</span>
            <div className="h-px flex-1 max-w-[100px] section-divider" />
          </div>

          {/* Section title */}
          <h2 className="section-title font-black uppercase mb-4">
            Technical
            <br />
            Capabilities
          </h2>

          {/* Description */}
          <p className="section-description text-lg leading-relaxed max-w-2xl">
            {c('skills.section_description')}
          </p>
        </div>

        {/* Asymmetrical grid layout - 12 column system */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {Object.entries(skills).map(([category, items], index) => {
            const columnSpans = [
              'lg:col-span-5',
              'lg:col-span-7',
              'lg:col-span-6',
              'lg:col-span-6',
            ];

            return (
              <div
                key={category}
                className={`group ${columnSpans[index]} animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category card */}
                <div className="card h-full p-6 transition-all duration-500">
                  {/* Category header */}
                  <div className="mb-6">
                    <span className="micro-label inline-block mb-2">0{index + 1}</span>

                    <h3
                      className="text-xl font-black uppercase tracking-wide mb-3"
                      style={{ color: '#ffffff', letterSpacing: '0.05em' }}
                    >
                      {category}
                    </h3>

                    <div className="accent-line" />
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="tag px-3 py-1.5 rounded transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Skill count indicator */}
                  <div className="mt-6 pt-4 border-t" style={{ borderColor: 'rgba(39, 69, 83, 0.2)' }}>
                    <div className="flex items-center justify-between">
                      <span className="micro-label">Proficiencies</span>
                      <span className="text-sm font-bold" style={{ color: '#274553' }}>
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
        <div className="callout-left mt-16 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="micro-label block mb-2">Core Competency</span>
            <p className="text-base leading-relaxed" style={{ color: '#cbd5e1' }}>
              {c('skills.core_competency')}
            </p>
          </div>

          <div className="flex items-center gap-3 whitespace-nowrap">
            <div className="text-right">
              <div className="text-3xl font-black" style={{ color: '#274553' }}>
                {Object.values(skills).flat().length}
              </div>
              <div className="micro-label">Total Skills</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
