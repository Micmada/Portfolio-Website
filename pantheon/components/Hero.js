export default {
  'hero.tagline': {
    label: 'Tagline',
    type: 'text',
    selector: '[data-content="hero.tagline"]',
    hint: 'Small label above the name, e.g. "Software Engineer · Milton Keynes, UK"',
  },

  'hero.name': {
    label: 'Name (line 1)',
    type: 'text',
    selector: '[data-content="hero.name"]',
    hint: 'First line of the large name heading, e.g. "Michael"',
  },

  'hero.name_line2': {
    label: 'Name (line 2)',
    type: 'text',
    selector: '[data-content="hero.name_line2"]',
    hint: 'Second line of the large name heading, e.g. "Eddleston"',
  },

  'hero.spec_location': {
    label: 'Location',
    type: 'text',
    selector: '[data-content="hero.spec_location"]',
    hint: 'Small label top-right of the hero (desktop only), e.g. "UK-Based"',
  },

  'hero.spec_experience': {
    label: 'Experience Summary',
    type: 'text',
    selector: '[data-content="hero.spec_experience"]',
    hint: 'Small label top-right of the hero (desktop only), e.g. "14mo+ Industry"',
  },

  'hero.description': {
    label: 'About Paragraph',
    type: 'text',
    selector: '[data-content="hero.description"]',
  },

  'hero.core_stack': {
    label: 'Core Stack',
    type: 'text',
    selector: '[data-content="hero.core_stack"]',
    hint: 'Comma-separated list shown as tags, e.g. "Python, TypeScript, React"',
  },

  'hero.strip': {
    label: 'Bottom Strip',
    type: 'text',
    selector: '[data-content="hero.strip"]',
    hint: 'Small label in the strip at the bottom of the hero, e.g. "page-flow · Pantheon · ARM"',
  },
};
