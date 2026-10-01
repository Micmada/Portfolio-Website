import content from '../content/pantheon.content.json';

export function c(key, fallback = '') {
  return content[key] ?? fallback;
}

export const CV_HREF = '/Michael_Eddleston_CV.pdf';
