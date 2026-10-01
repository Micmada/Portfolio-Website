export default {
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

  'hero.description': {
    label: 'Intro',
    type: 'text',
    selector: '[data-content="hero.description"]',
    hint: 'One or two sentences under your name. Keep it under about 20 words.',
  },

  'hero.image_caption': {
    label: 'Screenshot caption',
    type: 'text',
    selector: '[data-content="hero.image_caption"]',
    hint: 'Caption under the page-flow screenshot',
  },
};
