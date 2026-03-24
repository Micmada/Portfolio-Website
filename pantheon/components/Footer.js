export default {
  'footer.name': {
    label: 'Full Name',
    type: 'text',
    selector: 'footer .text-sm.font-bold.uppercase',
    hint: 'Name shown next to the monogram in the footer, e.g. "Michael Eddleston"',
  },

  'footer.role': {
    label: 'Role Title',
    type: 'text',
    selector: 'footer .footer-role',
    hint: 'Sub-label beneath the name in the footer, e.g. "Software Engineer"',
  },

  'footer.tagline': {
    label: 'Tagline',
    type: 'text',
    selector: 'footer .text-xs.font-bold',
    hint: 'The accent word at the end of "Designed & built with ___", e.g. "precision"',
  },

  'footer.built_with': {
    label: 'Built With',
    type: 'text',
    selector: 'footer .footer-built-with',
    hint: 'Technology credits shown at the bottom, e.g. "React • Next.js • Tailwind"',
  },
};
