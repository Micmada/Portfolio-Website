import { c } from '../content.js';

export default function Hero() {
  return (
    <section
      className="section min-h-screen flex items-center px-6"
      style={{ paddingTop: '80px' }}
    >
      {/* Blueprint grid pattern background */}
      <div className="blueprint-bg blueprint-bg--hero" />

      {/* Subtle gradient sweep */}
      <div className="gradient-sweep" />

      {/* Main content container - max 1200px */}
      <div className="max-w-[1200px] w-full mx-auto relative z-10">
        {/* Status indicator with pulse */}
        <div className="status-badge mb-12">
          <span className="status-badge__dot" />
          <span className="status-badge__text">{c('hero.status')}</span>
        </div>

        {/* Section label - numbered system */}
        <div className="flex items-center gap-4 mb-6">
          <span className="section-label">01. Introduction</span>
          <div className="h-px flex-1 max-w-[100px] section-divider" />
        </div>

        {/* Main headline - dramatic scale and tracking */}
        <h1 className="section-title section-title--hero font-black uppercase mb-4">
          {c('hero.name')}
          <br />
          {c('hero.name_line2')}
        </h1>

        {/* Role with accent */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-light tracking-wide" style={{ color: '#cbd5e1' }}>
            <span className="role-primary">{c('hero.role_primary')}</span>
            <span className="role-separator"> / </span>
            <span className="role-secondary">{c('hero.role_secondary')}</span>
          </h2>
        </div>

        {/* Description - generous leading */}
        <p className="section-description text-lg leading-relaxed mb-12 max-w-2xl">
          {c('hero.description')}
        </p>

        {/* Arsenal - tech stack with micro labels */}
        <div className="mb-16">
          <div className="mb-4">
            <span className="micro-label">Arsenal</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              'Python',
              'TypeScript',
              'React',
              'Node.js',
              'PostgreSQL',
              'System Design'
            ].map((tech) => (
              <span
                key={tech}
                className="tag px-4 py-2 text-sm rounded transition-all duration-300"
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
            className="btn-primary group inline-flex items-center gap-3 px-8 py-4"
          >
            <span>View Projects</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-1"
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
            className="btn-secondary inline-flex items-center gap-3 px-8 py-4"
          >
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Specifications callout - architectural detail */}
        <div className="spec-callout absolute bottom-12 right-0 hidden lg:flex flex-col gap-1 px-6 py-4">
          <span className="micro-label mb-2">Specifications</span>
          <div className="flex items-center gap-2">
            <span className="spec-key">Location</span>
            <span className="spec-value spec-value--location">{c('hero.spec_location')}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="spec-key">Experience</span>
            <span className="spec-value spec-value--experience">{c('hero.spec_experience')}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="spec-key">Status</span>
            <span className="spec-value--accent">{c('hero.spec_status')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
