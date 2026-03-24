export default {
  'experience.section_description': {
    label: 'Section Description',
    type: 'text',
    selector: '#experience .section-description',
  },

  'experience.role_title': {
    label: 'Job Title',
    type: 'text',
    selector: '#experience h3',
  },

  'experience.company': {
    label: 'Company Name',
    type: 'text',
    selector: '#experience .text-lg.font-bold',
  },

  'experience.location': {
    label: 'Job Location',
    type: 'text',
    selector: '#experience .text-base.font-medium',
  },

  'experience.period': {
    label: 'Date Range',
    type: 'text',
    selector: '#experience .text-sm.font-medium.tracking-wide',
    hint: 'Employment period, e.g. "June 2023 – March 2025"',
  },

  'experience.description': {
    label: 'Role Description',
    type: 'text',
    selector: '#experience .section-description.text-base',
  },

  'experience.duration': {
    label: 'Duration Label',
    type: 'text',
    selector: '#experience .text-4xl.font-black',
    hint: 'Large number shown in the duration sidebar card, e.g. "14 months"',
  },

  'experience.next_chapter': {
    label: 'Next Chapter Note',
    type: 'text',
    selector: '#experience .border-dashed p',
    hint: 'Short note shown in the dashed placeholder card, e.g. "Seeking new opportunities…"',
  },

  'experience.degree': {
    label: 'Degree Title',
    type: 'text',
    selector: '#experience h4',
  },

  'experience.university': {
    label: 'University Name',
    type: 'text',
    selector: '#experience .callout-left .university-name',
  },

  'experience.graduation': {
    label: 'Graduation Details',
    type: 'text',
    selector: '#experience .callout-left .text-sm',
    hint: 'Grade and year, e.g. "2:1 Honours • Graduated 2025"',
  },
};
