import { c, CV_HREF } from '../content.js';

const LINKS = [
  { label: 'GitHub',      href: 'https://github.com/Micmada' },
  { label: 'LinkedIn',    href: 'https://www.linkedin.com/in/michael-eddleston-4867a1214/' },
  { label: 'page-flow',   href: 'https://page-flow.co.uk' },
  { label: 'Download CV', href: CV_HREF, download: true },
];

export default function Contact() {
  const email = c('contact.email');
  const [user, domain] = email.split('@');

  return (
    <section id="contact" className="section" aria-labelledby="contact-heading">
      <div className="container contact__inner">
        <h2 id="contact-heading" className="sr-only">Contact</h2>
        <a href={`mailto:${email}`} className="display contact__email" data-content="contact.email">
          {user}<span className="contact__at">@</span>{domain}
        </a>
        <ul className="contact__links">
          {LINKS.map(({ label, href, download }) => (
            <li key={label}>
              <a
                href={href}
                download={download || undefined}
                target={download ? undefined : '_blank'}
                rel={download ? undefined : 'noopener noreferrer'}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
