import { c } from '../content.js';

export default function Footer() {
  return (
    <footer className="container">
      <div className="footer" style={{ marginTop: 0, marginBottom: 40 }}>
        <span data-content="contact.location_note">{c('contact.location_note')}</span>
        <span>
          © {new Date().getFullYear()} <span data-content="footer.name">{c('footer.name')}</span>
          {' '}
          <button type="button" className="footer__top" onClick={() => window.scrollTo({ top: 0 })}>
            Back to top
          </button>
        </span>
      </div>
    </footer>
  );
}
