export default {
  'contact.section_title_line1': {
    label: 'Section Heading (line 1)',
    type: 'text',
    selector: '#contact .section-title',
    hint: 'The heading is split across two lines by a <br />. This field is the first line, e.g. "Let\'s Work".',
  },

  'contact.section_title_line2': {
    label: 'Section Heading (line 2)',
    type: 'text',
    selector: '#contact .section-title',
    hint: 'Second line of the section heading, e.g. "Together".',
  },

  'contact.description': {
    label: 'Introduction Paragraph',
    type: 'text',
    selector: '#contact .section-description',
  },

  'contact.availability_status': {
    label: 'Availability Badge Text',
    type: 'text',
    selector: '#contact .status-badge .status-badge__text',
    hint: 'Text in the pulsing green pill, e.g. "Available Immediately"',
  },

  'contact.email': {
    label: 'Email Address',
    type: 'email',
    selector: '#contact a.email-link',
    hint: 'Used for both the displayed address and the mailto: link on the Send Email button',
  },

  'contact.response_note': {
    label: 'Response Time Note',
    type: 'text',
    selector: '#contact .card > div p.section-description',
  },

  'contact.location': {
    label: 'Location',
    type: 'text',
    selector: '#contact .card--muted .text-2xl',
  },

  'contact.location_note': {
    label: 'Location Note',
    type: 'text',
    selector: '#contact .card--muted p',
    hint: 'Short note under the location, e.g. "Open to relocation"',
  },

  'contact.interests': {
    label: 'Interests Statement',
    type: 'text',
    selector: '#contact .card--dashed p',
  },

  'contact.current_status': {
    label: 'Current Status',
    type: 'text',
    selector: '#contact .callout-left p',
    hint: 'Status line shown in the bottom callout bar, e.g. "Actively interviewing for software engineering roles"',
  },

  'contact.status_badge': {
    label: 'Status Badge Label',
    type: 'text',
    selector: '#contact .callout-left .text-sm.font-bold',
    hint: 'Short status label next to the pulsing dot, e.g. "Seeking opportunities"',
    ui: {
      maxLength: 30,
      placeholder: 'Seeking opportunities',
    }
  },
};
