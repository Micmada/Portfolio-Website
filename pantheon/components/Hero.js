export default {
  'hero.status': {
    label: 'Availability Status',
    type: 'text',
    selector: '.status-badge .status-badge__text',
    hint: 'Short status shown in the pill badge at the top of the page, e.g. "Available for Opportunities"',
  },

  'hero.name': {
    label: 'Name (line 1)',
    type: 'text',
    selector: '.section-title--hero',
    hint: 'The heading is split across two lines by a <br />. This field controls the first line only (e.g. "Michael"). Edit the second line in hero.name_line2.',
  },

  'hero.name_line2': {
    label: 'Name (line 2)',
    type: 'text',
    selector: '.section-title--hero',
    hint: 'Second line of the large name heading (e.g. "Eddleston"). Shown below the first line at the same scale.',
  },

  'hero.role_primary': {
    label: 'Primary Role Title',
    type: 'text',
    selector: 'h2 .role-primary',
    hint: 'Text shown before the "/" separator in the subtitle, e.g. "Software Engineer"',
  },

  'hero.role_secondary': {
    label: 'Secondary Role Title',
    type: 'text',
    selector: 'h2 .role-secondary',
    hint: 'Text shown after the "/" separator in the subtitle, e.g. "Full-Stack Developer"',
  },

  'hero.description': {
    label: 'Introduction Paragraph',
    type: 'text',
    selector: '.section-description',
  },

  'hero.spec_location': {
    label: 'Location',
    type: 'text',
    selector: '.spec-callout .spec-value--location',
    hint: 'Shown in the small specifications panel in the bottom-right corner of the hero (desktop only)',
  },

  'hero.spec_experience': {
    label: 'Experience Summary',
    type: 'text',
    selector: '.spec-callout .spec-value--experience',
    hint: 'Brief experience descriptor shown in the specs panel, e.g. "14mo+ Industry"',
  },

  'hero.spec_status': {
    label: 'Status',
    type: 'text',
    selector: '.spec-callout .spec-value--accent',
    hint: 'Status shown in the spec panel, e.g. "Active"',
    ui: {
      maxLength: 20,
      placeholder: 'Active',
    }
  },
};
