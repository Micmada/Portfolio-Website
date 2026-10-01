import { c } from '../content.js';

const ITEMS = [
  {
    when: 'Mar 2026 - now',
    org: 'page-flow',
    role: 'co-founder and lead developer',
    key: 'experience.pageflow_description',
    link: { href: 'https://page-flow.co.uk', label: 'Visit page-flow' },
  },
  {
    when: 'Jun 2023 - Mar 2025',
    org: 'ARM',
    role: 'software engineering intern',
    key: 'experience.description',
  },
  {
    when: '2022 - 2025',
    org: 'University of Winchester',
    role: 'BSc Software Engineering, 2:1',
    key: 'experience.education_description',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container section__inner exp__grid">
        <h2 className="h2">Experience</h2>
        <div>
          <ol className="exp__list">
            {ITEMS.map(item => (
              <li key={item.org} className="exp__item">
                <span className="exp__when">{item.when}</span>
                <h3 className="exp__title">
                  {item.org}, <span className="exp__role">{item.role}</span>
                </h3>
                <p className="exp__text" data-content={item.key}>{c(item.key)}</p>
                {item.link && (
                  <a className="exp__link" href={item.link.href} target="_blank" rel="noopener noreferrer">
                    {item.link.label}
                  </a>
                )}
              </li>
            ))}
          </ol>
          <p id="skills" className="exp__skills" data-content="skills.summary">{c('skills.summary')}</p>
        </div>
      </div>
    </section>
  );
}
