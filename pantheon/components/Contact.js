export default {
  'contact.intro': {
    label: 'Introduction',
    type: 'text',
    selector: '[data-content="contact.intro"]',
    hint: 'Short line above the Send Email button',
  },

  'contact.email': {
    label: 'Email Address',
    type: 'email',
    selector: '[data-content="contact.email"]',
    hint: 'Used for the displayed address and every mailto: link on the site',
  },

  'contact.response_time': {
    label: 'Response Time',
    type: 'text',
    selector: '[data-content="contact.response_time"]',
    hint: 'e.g. "Usually within 24 hours."',
  },

  'contact.location': {
    label: 'Location',
    type: 'text',
    selector: '[data-content="contact.location"]',
  },

  'contact.location_note': {
    label: 'Location Note',
    type: 'text',
    selector: '[data-content="contact.location_note"]',
    hint: 'Shown after the location, e.g. "Open to relocation"',
  },
};
