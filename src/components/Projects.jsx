import { useState, useEffect } from 'react';
import Papa from 'papaparse';
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
            className="relative max-w-4xl w-full max-h-full overflow-y-auto p-8 text-gray-100 bg-gray-900 rounded-lg shadow-lg"
            style={{ maxHeight: '85vh' }}
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

            <h1 className="text-4xl font-extrabold mb-4">{project.title}</h1>

            <div className="flex flex-wrap gap-3 mb-6">
              {[...project.languages, ...project.technologies].map((skill) => (
                <span key={skill} className="bg-blue-700 text-blue-300 rounded-full px-4 py-1 text-sm font-semibold">
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
                className="block mb-6 bg-green-600 text-white hover:bg-green-700 transition px-5 py-3 rounded font-semibold shadow w-max"
              >
                {project.hostedUrl ? 'View Live Site' : 'View on GitHub'}
              </a>
            )}

            {project.repoUrl && (
              <section className="p-6 rounded-lg shadow bg-gray-800 bg-opacity-70">
                <h2 className="text-2xl font-bold mb-4">{project.repoTitle}</h2>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                   className="text-blue-400 hover:text-blue-600 underline mb-6 inline-block">
                  Visit GitHub Repository
                </a>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Recent Commits</h3>
                  {commitsError && <p className="text-red-500 mb-4">Error: {commitsError}</p>}
                  {!commitsError && commits.length === 0 && <p className="text-gray-400 mb-4">Loading commits...</p>}
                  <ul className="list-disc list-inside space-y-2 max-h-48 overflow-auto">
                    {commits.map((commit) => (
                      <li key={commit.sha}>
                        <a href={commit.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
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
              <section className="mt-8 p-6 rounded-lg shadow bg-gray-800 bg-opacity-70">
                <h2 className="text-2xl font-bold mb-4">README.md</h2>
                <div className="prose prose-invert max-w-none">
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
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [projects, setProjects] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    Papa.parse('/data/projects.csv', {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsed = results.data
          .filter(p => p.id && p.title)
          .map(p => ({
            ...p,
            languages: p.languages ? p.languages.split(';').map(s => s.trim()) : [],
            technologies: p.technologies ? p.technologies.split(';').map(s => s.trim()) : [],
          }));

        setProjects(parsed);

        setLanguages(Array.from(new Set(parsed.flatMap(p => p.languages))).sort());
        setTechnologies(Array.from(new Set(parsed.flatMap(p => p.technologies))).sort());
      },
      error: (err) => console.error('CSV load error:', err),
    });
  }, []);

  const toggleLanguage = (lang) => {
    setSelectedLanguages(prev => prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]);
  };

  const toggleTechnology = (tech) => {
    setSelectedTechnologies(prev => prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]);
  };

  const filteredProjects = projects
    .map(project => {
      const langMatchCount = project.languages.filter(l => selectedLanguages.includes(l)).length;
      const techMatchCount = project.technologies.filter(t => selectedTechnologies.includes(t)).length;
      return { ...project, langMatchCount, techMatchCount, totalMatch: langMatchCount + techMatchCount };
    })
    .filter(p => (selectedLanguages.length === 0 || p.langMatchCount > 0) &&
                 (selectedTechnologies.length === 0 || p.techMatchCount > 0))
    .sort((a, b) => b.totalMatch - a.totalMatch);

  const getMatchColor = (totalMatch) => {
    if (selectedLanguages.length + selectedTechnologies.length === 0) return 'bg-gray-200';
    const ratio = totalMatch / (selectedLanguages.length + selectedTechnologies.length);
    if (ratio === 1) return 'bg-green-300';
    if (ratio >= 0.5) return 'bg-amber-300';
    return 'bg-red-300';
  };

  return (
    <section id="projects" className="py-12 px-6 max-w-7xl mx-auto relative" style={{ scrollMarginTop: '80px' }}>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <h3 className="text-xl font-bold mb-2">Languages</h3>
      <div className="mb-6 flex flex-wrap gap-4">
        {languages.map(lang => (
          <button
            key={lang}
            onClick={() => toggleLanguage(lang)}
            className={`px-4 py-2 rounded font-semibold transition
              ${selectedLanguages.includes(lang) ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200 text-gray-900'}
              hover:bg-blue-400 hover:text-white hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1`}
          >
            {lang}
          </button>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-2">Technologies</h3>
      <div className="mb-6 flex flex-wrap gap-4">
        {technologies.map(tech => (
          <button
            key={tech}
            onClick={() => toggleTechnology(tech)}
            className={`px-4 py-2 rounded font-semibold transition
              ${selectedTechnologies.includes(tech) ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-200 text-gray-900'}
              hover:bg-blue-400 hover:text-white hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className={`p-6 border rounded shadow hover:shadow-lg transition cursor-pointer text-gray-900 ${getMatchColor(project.totalMatch)}`}
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {[...project.languages, ...project.technologies].map(skill => (
                <span key={skill} className="text-xs bg-gray-300 rounded px-2 py-1">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
