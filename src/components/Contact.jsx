export default function Contact() {
  return (
    <section
      id="contact"
      className="section py-24 scroll-mt-20"
      style={{ zIndex: '1' }}
    >
      {/* Blueprint grid pattern */}
      <div className="blueprint-bg blueprint-bg--section" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="section-label">05. Connect</span>
            <div className="h-px flex-1 max-w-[100px] section-divider" />
          </div>

          <h2 className="section-title font-black uppercase mb-6">
            Let's Work
            <br />
            Together
          </h2>

          <p className="section-description text-lg leading-relaxed max-w-2xl mb-4">
            I'm actively seeking graduate software engineering opportunities. If you're looking for
            a passionate developer who's eager to learn, contribute, and grow with your team,
            I'd love to hear from you.
          </p>

          {/* Availability indicator */}
          <div className="status-badge mt-4">
            <span className="status-badge__dot" />
            <span className="status-badge__text">Available Immediately</span>
          </div>
        </div>

        {/* Contact grid - asymmetric 8+4 layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main contact card - 8 columns */}
          <div className="lg:col-span-8">
            <div className="card p-8 transition-all duration-500">
              <span className="micro-label block mb-6">Primary Contact</span>

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
                    className="email-link block text-2xl font-black group"
                  >
                    michael.eddleston@icloud.com
                    <span className="inline-block ml-2 transition-transform duration-300" style={{ fontSize: '20px' }}>
                      →
                    </span>
                  </a>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <a
                    href="mailto:michael.eddleston@icloud.com"
                    className="btn-primary inline-flex items-center gap-3 px-8 py-4"
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
              <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(39, 69, 83, 0.2)' }}>
                <div className="flex items-start gap-3">
                  <span className="arrow-bullet" style={{ fontSize: '16px' }}>→</span>
                  <p className="section-description text-sm leading-relaxed">
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
            <div className="card--muted p-6">
              <span className="micro-label block mb-3">Location</span>
              <div className="text-2xl font-black mb-2" style={{ color: '#274553' }}>
                Milton Keynes, UK
              </div>
              <p className="text-sm" style={{ color: '#94a3b8' }}>
                Open to relocation
              </p>
            </div>

            {/* Links card */}
            <div className="card p-6">
              <span className="micro-label block mb-4">Online Presence</span>

              <div className="space-y-3">
                <a
                  href="https://github.com/Micmada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="arrow-link transition-all duration-300"
                >
                  <span className="text-sm font-medium">GitHub</span>
                  <span style={{ fontSize: '14px', fontWeight: '900' }}>→</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/michael-eddleston-4867a1214/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="arrow-link transition-all duration-300"
                >
                  <span className="text-sm font-medium">LinkedIn</span>
                  <span style={{ fontSize: '14px', fontWeight: '900' }}>→</span>
                </a>

                <a
                  href="/Michael_Eddleston_CV.pdf"
                  download
                  className="arrow-link transition-all duration-300"
                >
                  <span className="text-sm font-medium">CV</span>
                  <span style={{ fontSize: '14px', fontWeight: '900' }}>→</span>
                </a>
              </div>
            </div>

            {/* Interests card */}
            <div className="card--dashed p-6">
              <span className="micro-label block mb-3">Interests</span>
              <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>
                Backend systems, automation, full-stack development, and continuous learning
              </p>
            </div>
          </div>
        </div>

        {/* Bottom callout */}
        <div className="callout-left mt-16 p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <span className="micro-label block mb-2">Current Status</span>
              <p className="text-base font-medium" style={{ color: '#cbd5e1' }}>
                Actively interviewing for software engineering roles
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="status-badge__dot" />
              <span className="text-sm font-bold" style={{ color: '#274553' }}>
                Seeking opportunities
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
