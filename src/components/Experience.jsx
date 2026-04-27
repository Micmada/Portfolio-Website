import { useState } from 'react';
import { c } from '../content.js';

const EXPERIENCES = [
  {
    num: '01',
    company: 'ARM Holdings',
    role: 'Software Engineering Intern',
    period: 'Jun 2023 – Mar 2025',
    duration: '14 months',
    type: 'INTERNSHIP',
    location: 'Cambridge, UK',
    description: c('experience.description'),
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
    num: '02',
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
        return (
          <div key={i} className={`row ${open ? 'row--expanded' : ''}`} style={{ cursor: 'pointer' }}>

            {/* Collapsed row */}
            <div
              className="row__inner"
              style={{ gridTemplateColumns: '48px 1fr auto auto', padding: '20px 48px', gap: 24 }}
              onClick={() => setExpandedIdx(open ? null : i)}
            >
              <span className="row__num">{exp.num}</span>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                  <span className="row__title">{exp.company}</span>
                  <span className="exp-row__badge">{exp.type}</span>
                </div>
                <div className="row__desc">{exp.role} · {exp.location} · {exp.period}</div>
              </div>

              {/* Tags — desktop only */}
              <div className="row__tags" style={{ gap: 6 }}>
                {exp.technologies.slice(0, 4).map(t => <span key={t} className="tag">{t}</span>)}
              </div>

              <span className="row__arrow">{open ? '↑' : '↓'}</span>
            </div>

            {/* Expanded content */}
            <div className={`row__expand-content ${open ? 'open' : ''}`}>
              <div className="row__expand-inner">

                {/* Description */}
                <p style={{ fontSize: 14, color: 'var(--mid)', lineHeight: 1.7, maxWidth: 720, marginBottom: 32 }}>
                  {exp.description}
                </p>

                {/* Bullets */}
                <div style={{ marginBottom: 32 }}>
                  <span className="micro-label" style={{ display: 'block', marginBottom: 16 }}>Key Achievements</span>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} style={{ display: 'flex', gap: 12, fontSize: 13, color: 'var(--fg)', lineHeight: 1.6 }}>
                        <span style={{ color: 'var(--mid)', flexShrink: 0 }}>→</span>
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
        );
      })}

      {/* Education rows */}
      {EDUCATION.map((edu, i) => (
        <div key={i} className="row">
          <div
            className="row__inner"
            style={{ gridTemplateColumns: '48px 1fr auto', padding: '20px 48px', gap: 24 }}
          >
            <span className="row__num">{edu.num}</span>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                <span className="row__title">{edu.institution}</span>
                <span className="exp-row__badge">EDUCATION</span>
              </div>
              <div className="row__desc">
                {edu.qualification} · {edu.grade} · {edu.year}
              </div>
              <div className="micro-label" style={{ marginTop: 6 }}>{edu.note}</div>
            </div>

            <span className="row__arrow" style={{ cursor: 'default' }} />
          </div>
        </div>
      ))}

      {/* Summary strip */}
      <div style={{ borderTop: 'var(--bar-h) solid var(--bar)', background: 'var(--surface)' }}>
        <div className="container" style={{ padding: '20px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="micro-label">BSc Software Engineering · University of Winchester · 2:1</span>
        </div>
      </div>

    </section>
  );
}