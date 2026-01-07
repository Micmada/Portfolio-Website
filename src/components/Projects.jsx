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
          className="fixed inset-0 flex items-center justify-center z-50 p-6 overflow-auto"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(8px)' }}
        >
          <motion.div
            className="relative max-w-4xl w-full max-h-full overflow-y-auto p-8 sm:p-12 rounded-lg shadow-2xl"
            style={{ maxHeight: '85vh', backgroundColor: '#FFFFFF', color: '#1A1A1A' }}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: '#F5F5F5',
                color: '#666666',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#FF6B6B';
                e.target.style.color = '#FFFFFF';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#F5F5F5';
                e.target.style.color = '#666666';
              }}
              aria-label="Close project details"
            >
              ×
            </button>

            {/* Project title */}
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 pr-8" style={{ color: '#1A1A1A' }}>
              {project.title}<span style={{ color: '#FF6B6B' }}>.</span>
            </h1>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[...project.languages, ...project.technologies].map(skill => (
                <span
                  key={skill}
                  className="rounded-full px-4 py-1.5 text-sm font-medium border"
                  style={{ 
                    backgroundColor: 'transparent', 
                    borderColor: '#E0E0E0',
                    color: '#666666' 
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="mb-8 text-base sm:text-lg leading-relaxed" style={{ color: '#444444' }}>
              {project.details}
            </p>

            {/* CTA buttons */}
            {(project.hostedUrl || project.repoUrl) && (
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href={project.hostedUrl || project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#FF6B6B'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#1A1A1A'}
                >
                  {project.hostedUrl ? 'View Live Site' : 'View on GitHub'}
                </a>
              </div>
            )}

            {/* Repository info */}
            {project.repoUrl && (
              <section className="p-6 rounded-lg mb-8" style={{ backgroundColor: '#FAFAFA' }}>
                <h2 className="text-xl font-bold mb-4" style={{ color: '#1A1A1A' }}>
                  Repository
                </h2>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-6 transition-colors duration-300"
                  style={{ 
                    color: '#FF6B6B',
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#1A1A1A'}
                  onMouseLeave={(e) => e.target.style.color = '#FF6B6B'}
                >
                  Visit GitHub Repository →
                </a>

                <div className="mt-6">
                  <h3 className="text-sm font-semibold mb-4 tracking-wide uppercase" style={{ color: '#888888' }}>
                    Recent Commits
                  </h3>
                  {commitsError && <p className="text-red-500 mb-4">Error: {commitsError}</p>}
                  {!commitsError && commits.length === 0 && <p style={{ color: '#888888' }}>Loading commits...</p>}
                  <ul className="space-y-3 max-h-64 overflow-auto">
                    {commits.map(commit => (
                      <li key={commit.sha} className="flex gap-3">
                        <span 
                          className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: '#FF6B6B' }}
                        />
                        <div>
                          <a
                            href={commit.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-sm"
                            style={{ color: '#444444' }}
                          >
                            {commit.commit.message.split('\n')[0]}
                          </a>
                          <span className="block text-xs mt-1" style={{ color: '#888888' }}>
                            {new Date(commit.commit.author.date).toLocaleDateString()}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* README */}
            {readme && (
              <section className="mt-8 p-6 rounded-lg" style={{ backgroundColor: '#FAFAFA' }}>
                <h2 className="text-xl font-bold mb-6" style={{ color: '#1A1A1A' }}>README.md</h2>
                <div 
                  className="prose prose-lg max-w-none"
                  style={{ color: '#444444' }}
                >
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
    fetch("https://i875rw8q64.execute-api.us-east-1.amazonaws.com/prod/projects")
      .then(res => res.ok ? res.json() : Promise.reject('Failed to fetch projects'))
      .then(data => {
        const parsed = data.map(p => ({
          ...p,
          languages: Array.isArray(p.languages) ? p.languages : p.languages?.split(',') || [],
          technologies: Array.isArray(p.technologies) ? p.technologies : p.technologies?.split(',') || [],
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
    if (selectedTechnologies.length === 0) return { bg: '#FFFFFF', text: '#1A1A1A', border: '#E0E0E0' }; 
    const matches = project.technologies.filter(t => selectedTechnologies.includes(t)).length;
    if (matches === 0) return { bg: '#FEE2E2', text: '#991B1B', border: '#FCA5A5' }; 
    const ratio = matches / selectedTechnologies.length;
    if (ratio === 1) return { bg: '#DCFCE7', text: '#166534', border: '#86EFAC' }; 
    return { bg: '#FEF3C7', text: '#854D0E', border: '#FDE047' };
  };
 
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const aColor = getProjectColor(a).bg;
    const bColor = getProjectColor(b).bg;
    const colorRank = { '#DCFCE7': 3, '#FEF3C7': 2, '#FEE2E2': 1, '#FFFFFF': 0 };
    return colorRank[bColor] - colorRank[aColor];
  });

  return (
    <section
      id="projects"
      className="w-full py-20 sm:py-24"
      style={{ 
        backgroundColor: '#FFFFFF', 
        color: '#1A1A1A', 
        scrollMarginTop: '80px' 
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div 
              className="w-12 h-px"
              style={{ backgroundColor: '#FF6B6B' }}
            />
            <span 
              className="text-xs tracking-[0.3em] uppercase font-medium"
              style={{ color: '#888888' }}
            >
              Selected Work
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold"
            style={{ color: '#1A1A1A' }}
          >
            Projects<span style={{ color: '#FF6B6B' }}>.</span>
          </h2>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-8">
          {/* Languages */}
          <div>
            <h3 
              className="text-sm tracking-[0.2em] uppercase font-semibold mb-4"
              style={{ color: '#888888' }}
            >
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {languages.map(lang => (
                <button
                  key={lang}
                  onClick={() => toggleLanguage(lang)}
                  className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300"
                  style={{
                    backgroundColor: selectedLanguage === lang ? '#1A1A1A' : 'transparent',
                    color: selectedLanguage === lang ? '#FFFFFF' : '#666666',
                    borderColor: selectedLanguage === lang ? '#1A1A1A' : '#E0E0E0',
                  }}
                  onMouseEnter={(e) => {
                    if (selectedLanguage !== lang) {
                      e.target.style.borderColor = '#FF6B6B';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedLanguage !== lang) {
                      e.target.style.borderColor = '#E0E0E0';
                    }
                  }}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 
              className="text-sm tracking-[0.2em] uppercase font-semibold mb-4"
              style={{ color: '#888888' }}
            >
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {filteredTechnologies.map(tech => (
                <button
                  key={tech}
                  onClick={() => toggleTechnology(tech)}
                  className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300"
                  style={{
                    backgroundColor: selectedTechnologies.includes(tech) ? '#FF6B6B' : 'transparent',
                    color: selectedTechnologies.includes(tech) ? '#FFFFFF' : '#666666',
                    borderColor: selectedTechnologies.includes(tech) ? '#FF6B6B' : '#E0E0E0',
                  }}
                  onMouseEnter={(e) => {
                    if (!selectedTechnologies.includes(tech)) {
                      e.target.style.borderColor = '#FF6B6B';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!selectedTechnologies.includes(tech)) {
                      e.target.style.borderColor = '#E0E0E0';
                    }
                  }}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedProjects.map((project, index) => {
            const colors = getProjectColor(project);
            return (
              <div
                key={project.id}
                className="group p-6 border rounded-lg transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
                style={{
                  backgroundColor: colors.bg,
                  borderColor: colors.border,
                  opacity: 0,
                  animation: `fadeInUp 0.5s ease-out forwards`,
                  animationDelay: `${index * 50}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ color: colors.text }}
                >
                  {project.title}
                </h3>
                <p 
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: colors.text, opacity: 0.8 }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map(skill => (
                    <span
                      key={skill}
                      className="text-xs rounded-full px-3 py-1 font-medium"
                      style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        color: colors.text
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span
                      className="text-xs rounded-full px-3 py-1 font-medium"
                      style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                        color: colors.text
                      }}
                    >
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}