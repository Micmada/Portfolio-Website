import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Your static skills list

function ProjectDetail({ project, onClose }) {
  const [commits, setCommits] = useState([]);
  const [commitsError, setCommitsError] = useState(null);
  const [readme, setReadme] = useState('');
  const [readmeError, setReadmeError] = useState(null);

  useEffect(() => {
    if (!project) return;

    // Fetch commits
    if (project.commitsApiUrl) {
      fetch(project.commitsApiUrl)
        .then(res => res.ok ? res.json() : Promise.reject('Failed to fetch commits'))
        .then(data => setCommits(data.slice(0, 5)))
        .catch(err => setCommitsError(err));
    }

    // Fetch README
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
              {project.skills.map((skill) => (
                <span key={skill} className="bg-blue-700 text-blue-300 rounded-full px-4 py-1 text-sm font-semibold">
                  {skill}
                </span>
              ))}
            </div>

            <p className="mb-6 text-lg leading-relaxed">{project.details}</p>

            {project.hostedUrl && (
              <a href={project.hostedUrl} target="_blank" rel="noopener noreferrer"
                 className="block mb-6 bg-green-600 text-white hover:bg-green-700 transition px-5 py-3 rounded font-semibold shadow w-max">
                View Live Site
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
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    Papa.parse('src/data/projects.csv', {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsed = results.data
          .filter((p) => p.id && p.title)
          .map((p) => ({
            ...p,
            skills: p.skills ? p.skills.split(';').map((s) => s.trim()) : [],
          }));

        setProjects(parsed);

        // 🧩 Dynamically extract all unique skills
        const allSkills = Array.from(
          new Set(parsed.flatMap((p) => p.skills))
        ).sort();
        setSkills(allSkills);
      },
      error: (err) => console.error('CSV load error:', err),
    });
  }, []);

  function toggleSkill(skill) {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  }

  const filteredProjects = projects
    .map((project) => {
      const matchCount = project.skills.filter((s) => selectedSkills.includes(s)).length;
      return { ...project, matchCount };
    })
    .filter((p) => selectedSkills.length === 0 || p.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount);

  function getMatchColor(matchCount) {
    if (selectedSkills.length === 0) return 'bg-gray-200';
    const ratio = matchCount / selectedSkills.length;
    if (ratio === 1) return 'bg-green-300';
    if (ratio >= 0.5) return 'bg-amber-300';
    return 'bg-red-300';
  }

  return (
    <section id="projects" className="py-12 px-6 max-w-7xl mx-auto relative">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="mb-6 flex flex-wrap gap-4">
        {skills.map((skill) => (
          <button
            key={skill}
            className={`px-4 py-2 rounded font-semibold transition
              ${selectedSkills.includes(skill)
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-200 text-gray-900'}
              hover:bg-blue-400 hover:text-white hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1`}
            onClick={() => toggleSkill(skill)}
          >
            {skill}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`p-6 border rounded shadow hover:shadow-lg transition cursor-pointer text-gray-900 ${getMatchColor(project.matchCount)}`}
            onClick={() => setSelectedProject(project)}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span key={skill} className="text-xs bg-gray-300 rounded px-2 py-1">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
