import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function ProjectDetail({ project, onClose }) {
  const [commits, setCommits] = useState([]);
  const [commitsError, setCommitsError] = useState(null);
  const [readme, setReadme] = useState('');
  const [readmeError, setReadmeError] = useState(null);

  useEffect(() => {
    if (!project) return;

    if (project.commitsApiUrl) {
      fetch(project.commitsApiUrl)
        .then(res => res.ok ? res.json() : Promise.reject('Failed to fetch commits'))
        .then(data => setCommits(data.slice(0, 5)))
        .catch(err => setCommitsError(err));
    }

    if (project.repoUrl) {
      const match = project.repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
      if (!match) return;
      const [_, owner, repo] = match;

      fetch(`https://api.github.com/repos/${owner}/${repo}/readme`)
        .then(res => res.ok ? res.json() : Promise.reject('Failed to fetch README'))
        .then(data => setReadme(atob(data.content)))
        .catch(err => setReadmeError(err.message));
    }
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 p-6 overflow-auto"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative max-w-4xl w-full max-h-full overflow-y-auto p-8 rounded-lg shadow-lg"
            style={{ maxHeight: '85vh', backgroundColor: '#252536', color: '#D4D4D4' }}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
              aria-label="Close project details"
            >
              &times;
            </button>

            <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#569CD6' }}>{project.title}</h1>

            <div className="flex flex-wrap gap-3 mb-6">
              {[...project.languages, ...project.technologies].map(skill => (
                <span
                  key={skill}
                  className="rounded-full px-4 py-1 text-sm font-semibold"
                  style={{ backgroundColor: '#1E1E2E', color: '#CE9178' }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="mb-6 text-lg leading-relaxed">{project.details}</p>

            {(project.hostedUrl || project.repoUrl) && (
              <a
                href={project.hostedUrl || project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-6 px-5 py-3 rounded font-semibold shadow w-max transition"
                style={{ backgroundColor: '#569CD6', color: '#1E1E2E' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#478FCB'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#569CD6'}
              >
                {project.hostedUrl ? 'View Live Site' : 'View on GitHub'}
              </a>
            )}

            {project.repoUrl && (
              <section className="p-6 rounded-lg shadow mb-6" style={{ backgroundColor: '#1E1E2E' }}>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#569CD6' }}>{project.repoTitle}</h2>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                  style={{ color: '#569CD6' }}
                  onMouseEnter={(e) => e.target.style.color = '#478FCB'}
                  onMouseLeave={(e) => e.target.style.color = '#569CD6'}
                >
                  Visit GitHub Repository
                </a>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#D4D4D4' }}>Recent Commits</h3>
                  {commitsError && <p className="text-red-500 mb-4">Error: {commitsError}</p>}
                  {!commitsError && commits.length === 0 && <p className="text-gray-400 mb-4">Loading commits...</p>}
                  <ul className="list-disc list-inside space-y-2 max-h-48 overflow-auto">
                    {commits.map(commit => (
                      <li key={commit.sha}>
                        <a
                          href={commit.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                          style={{ color: '#D4D4D4' }}
                        >
                          {commit.commit.message.split('\n')[0]} —{' '}
                          <span className="italic text-gray-400">
                            {new Date(commit.commit.author.date).toLocaleDateString()}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {readme && (
              <section className="mt-8 p-6 rounded-lg shadow" style={{ backgroundColor: '#1E1E2E' }}>
                <h2 className="text-2xl font-bold mb-4" style={{ color: '#569CD6' }}>README.md</h2>
                <div className="prose prose-invert max-w-none" style={{ color: '#D4D4D4' }}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{readme}</ReactMarkdown>
                </div>
              </section>
            )}

            {readmeError && <p className="text-red-500 mt-4">Error loading README: {readmeError}</p>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [projects, setProjects] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
  fetch("https://<api-id>.execute-api.us-east-1.amazonaws.com/prod/projects")
    .then(res => res.ok ? res.json() : Promise.reject('Failed to fetch projects'))
    .then(data => {
      const parsed = data.map(p => ({
        ...p,
        languages: Array.isArray(p.languages) ? p.languages : p.languages?.split(';') || [],
        technologies: Array.isArray(p.technologies) ? p.technologies : p.technologies?.split(';') || [],
      }));

      setProjects(parsed);
      setLanguages(Array.from(new Set(parsed.flatMap(p => p.languages))).sort());
      setTechnologies(Array.from(new Set(parsed.flatMap(p => p.technologies))).sort());
    })
    .catch(err => console.error('API fetch error:', err));
}, []);


  const toggleLanguage = lang => {
    setSelectedLanguage(selectedLanguage === lang ? null : lang);
    setSelectedTechnologies([]); 
  };

  const toggleTechnology = tech => {
    setSelectedTechnologies(prev => prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]);
  };

  const filteredProjects = selectedLanguage
    ? projects.filter(p => p.languages.includes(selectedLanguage))
    : projects;

  const filteredTechnologies = Array.from(new Set(filteredProjects.flatMap(p => p.technologies))).sort();

const getProjectColor = (project) => {
  if (selectedTechnologies.length === 0) return { bg: '#252536', text: '#D4D4D4' }; 
  const matches = project.technologies.filter(t => selectedTechnologies.includes(t)).length;
  if (matches === 0) return { bg: '#EF4444', text: '#D4D4D4' }; 
  const ratio = matches / selectedTechnologies.length;
  if (ratio === 1) return { bg: '#22C55E', text: '#1E1E2E' }; 
  return { bg: '#FACC15', text: '#1E1E2E' };
};
 
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const aColor = getProjectColor(a).bg;
    const bColor = getProjectColor(b).bg;
    const colorRank = { '#22C55E': 3, '#FACC15': 2, '#EF4444': 1, '#252536': 0 };
    return colorRank[bColor] - colorRank[aColor];
  });

  return (
    <section
  id="projects"
  className="w-full py-12 relative"
  style={{ backgroundColor: '#1E1E2E', color: '#D4D4D4', scrollMarginTop: '80px' }}
>
  <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6" style={{ color: '#569CD6' }}>Projects</h2>

      <h3 className="text-xl font-bold mb-2" style={{ color: '#D4D4D4' }}>Languages</h3>
      <div className="mb-6 flex flex-wrap gap-4">
        {languages.map(lang => (
          <button
            key={lang}
            onClick={() => toggleLanguage(lang)}
            className={`px-4 py-2 rounded font-semibold transition
              ${selectedLanguage === lang ? 'shadow-lg' : ''}
              hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-1`}
            style={{
              backgroundColor: selectedLanguage === lang ? '#569CD6' : '#252536',
              color: selectedLanguage === lang ? '#1E1E2E' : '#D4D4D4',
              borderColor: '#3C3C4E'
            }}
          >
            {lang}
          </button>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-2" style={{ color: '#D4D4D4' }}>Technologies</h3>
      <div className="mb-6 flex flex-wrap gap-4">
        {filteredTechnologies.map(tech => (
          <button
            key={tech}
            onClick={() => toggleTechnology(tech)}
            className={`px-4 py-2 rounded font-semibold transition
              ${selectedTechnologies.includes(tech) ? 'shadow-lg' : ''}
              hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-1`}
            style={{
              backgroundColor: selectedTechnologies.includes(tech) ? '#569CD6' : '#252536',
              color: selectedTechnologies.includes(tech) ? '#1E1E2E' : '#D4D4D4',
              borderColor: '#3C3C4E'
            }}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sortedProjects.map(project => {
          const colors = getProjectColor(project);
          return (
            <div
              key={project.id}
              className="p-6 border rounded shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => setSelectedProject(project)}
              style={{
                backgroundColor: colors.bg,
                color: colors.text,
                borderColor: '#3C3C4E'
              }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {[...project.technologies].map(skill => (
                  <span
                    key={skill}
                    className="text-xs rounded px-2 py-1"
                    style={{ backgroundColor: '#1E1E2E', color: '#CE9178' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
         </div>
    </section>
  );
}
