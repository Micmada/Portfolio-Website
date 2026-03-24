import { c } from '../content.js';

export default function Experience() {
  const experiences = [
    {
      title: c('experience.role_title'),
      company: c('experience.company'),
      location: c('experience.location'),
      period: c('experience.period'),
      duration: c('experience.duration'),
      description: c('experience.description'),
      bullets: [
        "Architected Python automation system to replace legacy documentation pipeline, reducing processing time from 1 week to under 24 hours for 20,000+ page technical specifications; delivered 2x efficiency improvement in production environment",
        "Debugged and resolved critical production issues identified in senior engineers' code, maintaining system stability for enterprise-scale documentation generation workflows",
        "Collaborated in Agile environment using Gerrit for code reviews and Jenkins for CI/CD, contributing to modernisation of legacy systems processing machine-readable architecture specifications",
        "Gained hands-on experience developing large-scale document automation systems handling complex technical specifications for industry-standard ARM architecture documentation"
      ],
      technologies: ['Python', 'Jenkins', 'Gerrit', 'Git', 'Linux', 'Automation']
    }
  ];

  return (
    <section
      id="experience"
      className="section w-full py-24 scroll-mt-20"
    >
      {/* Blueprint grid pattern */}
      <div className="blueprint-bg blueprint-bg--section" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="section-label">03. Foundations</span>
            <div className="h-px flex-1 max-w-[100px] section-divider" />
          </div>

          <h2 className="section-title font-black uppercase mb-4">
            Professional
            <br />
            Experience
          </h2>

          <p className="section-description text-lg leading-relaxed max-w-2xl">
            {c('experience.section_description')}
          </p>
        </div>

        {/* Experience entries */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="lg:col-span-12 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Primary content card */}
                <div className="card lg:col-span-8 p-8 group transition-all duration-500">
                  {/* Header with timeline indicator */}
                  <div
                    className="flex items-start justify-between gap-4 mb-6 pb-6 border-b"
                    style={{ borderColor: 'rgba(39, 69, 83, 0.2)' }}
                  >
                    <div className="flex-1">
                      <h3
                        className="text-3xl font-black uppercase tracking-wide mb-3"
                        style={{ color: '#ffffff', lineHeight: '1.1', letterSpacing: '0.02em' }}
                      >
                        {exp.title}
                      </h3>

                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-lg font-bold" style={{ color: '#274553' }}>
                          {exp.company}
                        </span>
                        <span style={{ color: 'rgba(39, 69, 83, 0.4)' }}>—</span>
                        <span className="text-base font-medium" style={{ color: '#cbd5e1' }}>
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-sm font-medium tracking-wide" style={{ color: '#64748b' }}>
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
                  <p className="section-description text-base leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Key achievements */}
                  <div className="space-y-4">
                    <span className="micro-label block mb-4">Key Achievements</span>

                    <ul className="space-y-4">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-4 text-sm leading-relaxed">
                          <span className="arrow-bullet">→</span>
                          <span style={{ color: '#cbd5e1' }}>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies used */}
                  <div
                    className="mt-8 pt-6 border-t"
                    style={{ borderColor: 'rgba(39, 69, 83, 0.2)' }}
                  >
                    <span className="micro-label block mb-3">Technologies</span>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="tag tag--sm px-3 py-1 rounded transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar specifications */}
                <div className="lg:col-span-4 space-y-6">
                  {/* Duration card */}
                  <div className="card--muted p-6">
                    <span className="micro-label block mb-3">Duration</span>
                    <div className="text-4xl font-black mb-2" style={{ color: '#274553' }}>
                      {exp.duration}
                    </div>
                    <p className="text-sm" style={{ color: '#94a3b8' }}>
                      Full-time internship
                    </p>
                  </div>

                  {/* Impact metrics card */}
                  <div className="card p-6">
                    <span className="micro-label block mb-4">Impact Metrics</span>

                    <div className="space-y-4">
                      <div>
                        <div className="text-2xl font-black mb-1" style={{ color: '#ffffff' }}>
                          24hrs
                        </div>
                        <p className="text-xs" style={{ color: '#94a3b8' }}>
                          Processing time (from 1 week)
                        </p>
                      </div>

                      <div className="pt-3 border-t" style={{ borderColor: 'rgba(39, 69, 83, 0.2)' }}>
                        <div className="text-2xl font-black mb-1" style={{ color: '#ffffff' }}>
                          20,000+
                        </div>
                        <p className="text-xs" style={{ color: '#94a3b8' }}>
                          Pages processed
                        </p>
                      </div>

                      <div className="pt-3 border-t" style={{ borderColor: 'rgba(39, 69, 83, 0.2)' }}>
                        <div className="text-2xl font-black mb-1" style={{ color: '#ffffff' }}>
                          2x
                        </div>
                        <p className="text-xs" style={{ color: '#94a3b8' }}>
                          Efficiency improvement
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Coming soon placeholder */}
                  <div
                    className="p-6 border-2 border-dashed"
                    style={{ borderColor: 'rgba(39, 69, 83, 0.2)' }}
                  >
                    <span className="micro-label block mb-2">Next Chapter</span>
                    <p className="text-sm" style={{ color: '#94a3b8' }}>
                      {c('experience.next_chapter')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education section */}
        <div className="callout-left mt-16 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <span className="micro-label block mb-2">Academic Foundation</span>
            <h4 className="text-xl font-black uppercase mb-2" style={{ color: '#ffffff' }}>
              {c('experience.degree')}
            </h4>
            <p className="university-name text-sm mb-1" style={{ color: '#274553' }}>
              {c('experience.university')}
            </p>
            <p className="text-sm" style={{ color: '#94a3b8' }}>
              {c('experience.graduation')}
            </p>
          </div>

          <div className="flex items-center justify-end">
            <div className="text-right">
              <span className="micro-label block mb-2">Total Experience</span>
              <div className="text-3xl font-black" style={{ color: '#274553' }}>
                14+ months
              </div>
              <p className="text-sm mt-1" style={{ color: '#94a3b8' }}>
                Industry experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
