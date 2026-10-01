import content from '../content/pantheon.content.json';

export function c(key, fallback = '') {
  return content[key] ?? fallback;
}

// Comma-separated content value → trimmed list
export function list(key) {
  return c(key).split(',').map(s => s.trim()).filter(Boolean);
}
