import content from '../content/pantheon.content.json';

export function c(key, fallback = '') {
  return content[key] ?? fallback;
}
