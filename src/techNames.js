// Display names for the lowercase slugs in each repo's README front matter.
const NAMES = {
  ai: 'AI', api: 'API', aws: 'AWS', css: 'CSS', django: 'Django', express: 'Express',
  flask: 'Flask', gin: 'Gin', 'github-api': 'GitHub API', go: 'Go', gorm: 'GORM',
  html: 'HTML', javascript: 'JavaScript', jwt: 'JWT', lambda: 'Lambda',
  markdown: 'Markdown', mongodb: 'MongoDB', nodejs: 'Node.js', postgresql: 'PostgreSQL',
  python: 'Python', react: 'React', 'react-grid-layout': 'React Grid Layout',
  recharts: 'Recharts', rest: 'REST', serverless: 'Serverless', sqlite: 'SQLite',
  streamlit: 'Streamlit', tailwind: 'Tailwind CSS', textblob: 'TextBlob',
  typescript: 'TypeScript', xgboost: 'XGBoost',
};

export function displayName(slug) {
  return NAMES[slug] ?? slug.replace(/(^|-)(\w)/g, (_, sep, ch) => (sep ? ' ' : '') + ch.toUpperCase());
}
