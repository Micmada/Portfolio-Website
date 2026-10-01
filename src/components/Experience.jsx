import { useState } from 'react';
import { c } from '../content.js';

const EXPERIENCES = [
  {
    num: '01',
    company: 'page-flow',
    role: 'Co-Founder & Lead Developer',
    period: 'Mar 2026 – Present',
    type: 'CO-FOUNDER',
    location: 'Milton Keynes, UK',
    url: 'https://page-flow.co.uk',
    descriptionKey: 'experience.pageflow_description',
    bullets: [
      'Architected Pantheon, a multi-tenant site management platform: one sign-in where a client edits page content, manages portfolio projects, works through website enquiries, and tracks their build and invoices.',
      'Designed a versioned HTTP module contract and built four independently deployable modules against it (account, Projects, CMS, Enquiries), each with its own repository, stack and test suite.',
      'Moved from a per-client admin domain to a single login host, deleting a cross-origin handoff subsystem and cutting client onboarding from a DNS-and-certificate runbook to two database writes.',
      'Built a Git-backed CMS with draft and publish branches, schema-driven forms and a multi-device preview of the client\'s real page; content stays in the client\'s own repository.',
      'Enforced nine security invariants in code and tests, including opaque server-side sessions, server-derived tenancy, write-only secrets and audited studio-admin access.',
      '253 automated tests and a 21-check end-to-end smoke test running on production code paths against local AWS stand-ins.',
    ],
    technologies: ['TypeScript', 'React', 'AWS Lambda', 'DynamoDB', 'Cognito', 'AWS CDK', 'Node.js'],
  },
  {
    num: '02',
    company: 'ARM Holdings',
    role: 'Software Engineering Intern',
    period: 'Jun 2023 – Mar 2025',
    type: 'INTERNSHIP',
    location: 'Cambridge, UK',
    descriptionKey: 'experience.description',
    bullets: [
      'Architected Python automation system replacing legacy documentation pipeline — reduced processing time from ~1 week to under 24 hours for 20,000+ page technical specifications.',
      'Debugged and resolved critical production issues in senior engineers\' code, maintaining stability for enterprise-scale documentation workflows.',
      'Collaborated in Agile environment using Gerrit for code reviews and Jenkins for CI/CD.',
      'Gained hands-on experience with large-scale document automation for ARM architecture specification generation.',
    ],
    technologies: ['Python', 'Jenkins', 'Gerrit', 'Git', 'Linux', 'Automation'],
  },
];

const EDUCATION = [
  {
    num: '03',
    institution: 'University of Winchester',
    qualification: 'BSc Software Engineering',
    grade: '2:1 Honours',
    year: '2022 – 2025',
    note: 'Final project: F1 Race Strategy Predictor (XGBoost + Monte Carlo simulation)',
  },
];

export default function Experience() {
  const [expandedIdx, setExpandedIdx] = useState(null);

  return (
    <section id="experience" className="section" style={{ scrollMarginTop: 'var(--navbar-height)' }}>

      {/* Section header */}
      <div className="section-header section-header--bordered">
        <div className="container">
          <div className="micro-label" style={{ marginBottom: 12 }}>03 — Experience</div>
          <h2 className="section-title">Work &<br />Education</h2>
        </div>
      </div>

      {/* Experience rows */}
      {EXPERIENCES.map((exp, i) => {
        const open = expandedIdx === i;
        const panelId = `experience-panel-${i}`;
        return (
          <div key={exp.company} className={`row ${open ? 'row--expanded' : ''}`}>

            {/* Collapsed row */}
            <h3 style={{ margin: 0 }}>
              <button
                type="button"
                className="row__inner row__toggle exp-row__inner"
                onClick={() => setExpandedIdx(open ? null : i)}
                aria-expanded={open}
                aria-controls={panelId}
              >
                <span className="row__num">{exp.num}</span>

                <span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                    <span className="row__title">{exp.company}</span>
                    <span className="exp-row__badge">{exp.type}</span>
                  </span>
                  <span className="row__desc" style={{ display: 'block' }}>{exp.role} · {exp.location} · {exp.period}</span>
                </span>

                {/* Tags — desktop only */}
                <span className="row__tags" style={{ gap: 6 }}>
                  {exp.technologies.slice(0, 4).map(t => <span key={t} className="tag">{t}</span>)}
                </span>

                <span className="row__arrow" aria-hidden="true">{open ? '↑' : '↓'}</span>
              </button>
            </h3>

            {/* Expanded content */}
            <div
              id={panelId}
              className={`row__expand-content ${open ? 'open' : ''}`}
              inert={!open}
            >
              <div className="row__expand-clip">
              <div className="row__expand-inner">

                {/* Description */}
                <p style={{ fontSize: 14, color: 'var(--mid)', lineHeight: 1.7, maxWidth: 720, marginBottom: exp.url ? 20 : 32 }} data-content={exp.descriptionKey}>
                  {c(exp.descriptionKey)}
                </p>

                {exp.url && (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary"
                    style={{ marginBottom: 32 }}
                  >
                    Visit {exp.company} <span aria-hidden="true">↗</span>
                  </a>
                )}

                {/* Bullets */}
                <div style={{ marginBottom: 32 }}>
                  <span className="micro-label" style={{ display: 'block', marginBottom: 16 }}>Key Achievements</span>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} style={{ display: 'flex', gap: 12, fontSize: 13, color: 'var(--fg)', lineHeight: 1.6 }}>
                        <span style={{ color: 'var(--mid)', flexShrink: 0 }} aria-hidden="true">→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* All tech tags */}
                <div>
                  <span className="micro-label" style={{ display: 'block', marginBottom: 10 }}>Technologies</span>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {exp.technologies.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Education rows */}
      {EDUCATION.map(edu => (
        <div key={edu.institution} className="row">
          <div className="row__inner exp-row__inner">
            <span className="row__num">{edu.num}</span>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                <h3 className="row__title" style={{ fontWeight: 'inherit' }}>{edu.institution}</h3>
                <span className="exp-row__badge">EDUCATION</span>
              </div>
              <div className="row__desc">
                {edu.qualification} · {edu.grade} · {edu.year}
              </div>
              <div className="micro-label" style={{ marginTop: 6 }}>{edu.note}</div>
            </div>
          </div>
        </div>
      ))}

      {/* Summary strip */}
      <div style={{ borderTop: 'var(--bar-h) solid var(--bar)', background: 'var(--surface)' }}>
        <div className="container" style={{ paddingBlock: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="micro-label">BSc Software Engineering · University of Winchester · 2:1</span>
        </div>
      </div>

    </section>
  );
}
