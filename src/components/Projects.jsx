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

    // GitHub Personal Access Token (read-only, public repos only)
    // Generate at: https://github.com/settings/tokens
    const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN || '';
    const headers = GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {};

    if (project.commitsApiUrl) {
      fetch(project.commitsApiUrl, { headers })
        .then(res => {
          if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
          return res.json();
        })
        .then(data => setCommits(data.slice(0, 5)))
        .catch(err => {
          console.error('Commits fetch error:', err);
          setCommitsError(err.message);
        });
    }

    if (project.repoUrl) {
      const match = project.repoUrl.match(/github\.com\/([^/]+)\/([^/]+)/);
      if (!match) return;
      const [_, owner, repo] = match;

      fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, { headers })
        .then(res => {
          if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
          return res.json();
        })
        .then(data => {
          const decodedContent = decodeURIComponent(escape(atob(data.content)));
          const withoutYaml = decodedContent.replace(/^---\s*\n[\s\S]*?\n---\s*\n/m, '');
          setReadme(withoutYaml);
        })
        .catch(err => {
          console.error('README fetch error:', err);
          setReadmeError(err.message);
        });
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
          style={{ 
            backgroundColor: 'rgba(21, 26, 29, 0.95)', 
            backdropFilter: 'blur(12px)',
            fontFamily: "'Epilogue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          <motion.div
            className="relative max-w-4xl w-full max-h-full overflow-y-auto p-8 sm:p-10 md:p-12"
            style={{ 
              maxHeight: '85vh', 
              backgroundColor: '#1f2528',
              border: '1px solid rgba(39, 69, 83, 0.3)',
              color: '#ffffff',
              overflowWrap: 'break-word',
              wordBreak: 'break-word'
            }}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center transition-all duration-300 font-bold text-2xl"
              style={{ 
                backgroundColor: 'rgba(39, 69, 83, 0.1)',
                border: '1px solid rgba(39, 69, 83, 0.3)',
                color: '#cbd5e1',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#274553';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(39, 69, 83, 0.1)';
                e.currentTarget.style.color = '#cbd5e1';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              aria-label="Close project details"
            >
              ×
            </button>

            {/* Project number */}
            <span 
              className="inline-block font-bold uppercase tracking-[0.3em] mb-4"
              style={{
                fontSize: '10px',
                color: '#64748b',
              }}
            >
              Project Details
            </span>

            {/* Project title */}
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6 pr-12" 
              style={{ 
                color: '#ffffff',
                lineHeight: '1.1',
              }}
            >
              {project.title}
            </h1>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[...project.languages, ...project.technologies].map(skill => (
                <span
                  key={skill}
                  className="rounded px-3 py-1.5 text-xs font-medium"
                  style={{ 
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(39, 69, 83, 0.3)',
                    color: '#cbd5e1',
                    fontSize: '11px',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="mb-8 text-base sm:text-lg leading-relaxed" style={{ color: '#94a3b8' }}>
              {project.details}
            </p>

            {/* CTA buttons */}
            {(project.hostedUrl || project.repoUrl) && (
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href={project.hostedUrl || project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 font-bold uppercase tracking-wide text-sm transition-all duration-300"
                  style={{ 
                    backgroundColor: '#274553',
                    color: '#ffffff',
                    letterSpacing: '0.1em',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#2f5563';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#274553';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  {project.hostedUrl ? 'View Live Site' : 'View on GitHub'}
                  <span style={{ fontSize: '16px' }}>→</span>
                </a>
              </div>
            )}

            {/* Repository info */}
            {project.repoUrl && (
              <section className="p-6 mb-8" 
                style={{ 
                  backgroundColor: 'rgba(39, 69, 83, 0.05)',
                  borderLeft: '2px solid #274553',
                }}
              >
                <span 
                  className="block font-bold uppercase tracking-[0.3em] mb-4"
                  style={{
                    fontSize: '10px',
                    color: '#64748b',
                  }}
                >
                  Repository
                </span>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mb-6 transition-colors duration-300 font-medium"
                  style={{ 
                    color: '#274553',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#274553'}
                >
                  Visit GitHub Repository →
                </a>

                <div className="mt-6">
                  <h3 
                    className="font-bold uppercase tracking-[0.3em] mb-4"
                    style={{ 
                      fontSize: '10px',
                      color: '#64748b',
                    }}
                  >
                    Recent Commits
                  </h3>
                  {commitsError && (
                    <p style={{ color: '#fbbf24', fontSize: '13px' }}>
                      ⚠ Commits unavailable - View the repository to see commit history
                    </p>
                  )}
                  {!commitsError && commits.length === 0 && (
                    <p style={{ color: '#64748b' }}>Loading commits...</p>
                  )}
                  {commits.length > 0 && (
                    <ul className="space-y-3 max-h-64 overflow-auto">
                      {commits.map(commit => (
                        <li key={commit.sha} className="flex gap-3 items-start">
                          <span 
                            className="mt-2 flex-shrink-0"
                            style={{ 
                              color: '#274553',
                              fontSize: '12px',
                              fontWeight: '900',
                            }}
                          >
                            →
                          </span>
                          <div>
                            <a
                              href={commit.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline text-sm transition-colors duration-300"
                              style={{ color: '#cbd5e1' }}
                              onMouseEnter={(e) => e.currentTarget.style.color = '#274553'}
                              onMouseLeave={(e) => e.currentTarget.style.color = '#cbd5e1'}
                            >
                              {commit.commit.message.split('\n')[0]}
                            </a>
                            <span className="block text-xs mt-1" style={{ color: '#64748b' }}>
                              {new Date(commit.commit.author.date).toLocaleDateString()}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            )}

            {/* README */}
            {readme ? (
              <section 
                className="mt-8 p-6 overflow-hidden" 
                style={{ 
                  backgroundColor: '#151a1d',
                  border: '1px solid rgba(39, 69, 83, 0.2)',
                }}
              >
                <span 
                  className="block font-bold uppercase tracking-[0.3em] mb-6"
                  style={{
                    fontSize: '10px',
                    color: '#64748b',
                  }}
                >
                  README.md
                </span>
                <div 
                  className="prose prose-invert prose-lg max-w-none"
                  style={{ 
                    color: '#94a3b8',
                    overflowWrap: 'break-word',
                    wordBreak: 'break-word',
                    maxWidth: '100%'
                  }}
                >
                  <style jsx>{`
                    .prose :global(h1),
                    .prose :global(h2),
                    .prose :global(h3) {
                      color: #ffffff;
                      font-weight: 800;
                      text-transform: uppercase;
                      letter-spacing: 0.05em;
                    }
                    .prose :global(a) {
                      color: #274553;
                      text-decoration: none;
                      border-bottom: 1px solid rgba(39, 69, 83, 0.3);
                      transition: all 0.3s;
                    }
                    .prose :global(a:hover) {
                      color: #ffffff;
                      border-bottom-color: #274553;
                    }
                    .prose :global(code) {
                      background-color: rgba(39, 69, 83, 0.1);
                      color: #cbd5e1;
                      padding: 2px 6px;
                      border-radius: 3px;
                      font-size: 0.9em;
                    }
                    .prose :global(pre) {
                      background-color: #151a1d;
                      border: 1px solid rgba(39, 69, 83, 0.2);
                      overflow-x: auto;
                    }
                    .prose :global(table) {
                      border-collapse: collapse;
                      width: 100%;
                    }
                    .prose :global(table td),
                    .prose :global(table th) {
                      border: 1px solid rgba(39, 69, 83, 0.2);
                      padding: 8px 12px;
                    }
                    .prose :global(table th) {
                      background-color: rgba(39, 69, 83, 0.1);
                      color: #ffffff;
                      font-weight: 700;
                    }
                    .prose :global(img) {
                      max-width: 100%;
                      height: auto;
                    }
                  `}</style>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{readme}</ReactMarkdown>
                </div>
              </section>
            ) : readmeError ? (
              <section 
                className="mt-8 p-6" 
                style={{ 
                  backgroundColor: 'rgba(251, 191, 36, 0.1)',
                  border: '1px solid rgba(251, 191, 36, 0.3)',
                }}
              >
                <span 
                  className="block font-bold uppercase tracking-[0.3em] mb-3"
                  style={{
                    fontSize: '10px',
                    color: '#fbbf24',
                  }}
                >
                  README.md
                </span>
                <p style={{ color: '#fbbf24', fontSize: '13px' }}>
                  ⚠ README unavailable - Visit the repository for full documentation
                </p>
              </section>
            ) : null}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Projects({ onProjectOpen }) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [projects, setProjects] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projectCommitDates, setProjectCommitDates] = useState({});

  // Notify parent when project opens/closes
  useEffect(() => {
    if (onProjectOpen) {
      onProjectOpen(selectedProject !== null);
    }
  }, [selectedProject, onProjectOpen]);

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

        // Fetch latest commit date for each project
        parsed.forEach(project => {
          if (project.commitsApiUrl) {
            fetch(project.commitsApiUrl)
              .then(res => res.ok ? res.json() : Promise.reject('Failed to fetch commits'))
              .then(commits => {
                if (commits.length > 0) {
                  setProjectCommitDates(prev => ({
                    ...prev,
                    [project.id]: new Date(commits[0].commit.author.date)
                  }));
                }
              })
              .catch(err => console.error(`Error fetching commits for ${project.title}:`, err));
          }
        });
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
    if (selectedTechnologies.length === 0) {
      return { 
        bg: '#1f2528',
        text: '#ffffff',
        border: 'rgba(39, 69, 83, 0.2)',
        accentBg: 'rgba(39, 69, 83, 0.1)',
        accentText: '#cbd5e1'
      }; 
    }
    const matches = project.technologies.filter(t => selectedTechnologies.includes(t)).length;
    if (matches === 0) {
      return { 
        bg: '#1f2528',
        text: '#cbd5e1',
        border: 'rgba(239, 68, 68, 0.3)',
        accentBg: 'rgba(239, 68, 68, 0.1)',
        accentText: '#ef4444'
      }; 
    }
    const ratio = matches / selectedTechnologies.length;
    if (ratio === 1) {
      return { 
        bg: '#1f2528',
        text: '#ffffff',
        border: 'rgba(39, 69, 83, 0.5)',
        accentBg: 'rgba(39, 69, 83, 0.2)',
        accentText: '#274553'
      }; 
    }
    return { 
      bg: '#1f2528',
      text: '#cbd5e1',
      border: 'rgba(251, 191, 36, 0.3)',
      accentBg: 'rgba(251, 191, 36, 0.1)',
      accentText: '#fbbf24'
    };
  };
 
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (selectedTechnologies.length > 0) {
      const aMatches = a.technologies.filter(t => selectedTechnologies.includes(t)).length;
      const bMatches = b.technologies.filter(t => selectedTechnologies.includes(t)).length;
      const aRatio = aMatches / selectedTechnologies.length;
      const bRatio = bMatches / selectedTechnologies.length;
      
      const getRank = (ratio, matches) => {
        if (matches === 0) return 1;
        if (ratio === 1) return 3;
        return 2;
      };
      
      const rankDiff = getRank(bRatio, bMatches) - getRank(aRatio, aMatches);
      if (rankDiff !== 0) return rankDiff;
    }
    
    const aDate = projectCommitDates[a.id] || new Date(0);
    const bDate = projectCommitDates[b.id] || new Date(0);
    return bDate - aDate; 
  });

  return (
    <section
      id="projects"
      className="w-full py-24 relative overflow-hidden"
      style={{ 
        backgroundColor: '#151a1d',
        color: '#ffffff', 
        scrollMarginTop: '80px',
        fontFamily: "'Epilogue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Blueprint grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(#274553 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section header - numbered system */}
        <div className="mb-16">
          {/* Section number and label */}
          <div className="flex items-center gap-4 mb-6">
            <span 
              className="font-black uppercase tracking-[0.4em]"
              style={{
                fontSize: '12px',
                color: '#274553',
              }}
            >
              04. Artifacts
            </span>
            <div 
              className="h-px flex-1 max-w-[100px]"
              style={{ backgroundColor: 'rgba(39, 69, 83, 0.2)' }}
            />
          </div>

          {/* Section title */}
          <h2
            className="font-black uppercase mb-4"
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              lineHeight: '0.9',
              letterSpacing: '-0.03em',
              color: '#ffffff',
            }}
          >
            Selected
            <br />
            Projects
          </h2>

          {/* Description */}
          <p 
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: '#94a3b8' }}
          >
            A curated collection of full-stack applications, automation systems, and 
            experimental prototypes—each demonstrating technical versatility and problem-solving.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-8">
          {/* Languages */}
          <div>
            <span 
              className="block font-bold uppercase tracking-[0.3em] mb-4"
              style={{
                fontSize: '10px',
                color: '#64748b',
              }}
            >
              Filter by Language
            </span>
            <div className="flex flex-wrap gap-2">
              {languages.map(lang => (
                <button
                  key={lang}
                  onClick={() => toggleLanguage(lang)}
                  className="px-4 py-2 rounded text-sm font-medium transition-all duration-300"
                  style={{
                    backgroundColor: selectedLanguage === lang ? '#274553' : 'transparent',
                    color: selectedLanguage === lang ? '#ffffff' : '#cbd5e1',
                    border: `1px solid ${selectedLanguage === lang ? '#274553' : 'rgba(39, 69, 83, 0.3)'}`,
                  }}
                  onMouseEnter={(e) => {
                    if (selectedLanguage !== lang) {
                      e.currentTarget.style.borderColor = 'rgba(39, 69, 83, 0.5)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedLanguage !== lang) {
                      e.currentTarget.style.borderColor = 'rgba(39, 69, 83, 0.3)';
                      e.currentTarget.style.transform = 'translateY(0)';
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
            <span 
              className="block font-bold uppercase tracking-[0.3em] mb-4"
              style={{
                fontSize: '10px',
                color: '#64748b',
              }}
            >
              Filter by Technology
            </span>
            <div className="flex flex-wrap gap-2">
              {filteredTechnologies.map(tech => (
                <button
                  key={tech}
                  onClick={() => toggleTechnology(tech)}
                  className="px-4 py-2 rounded text-sm font-medium transition-all duration-300"
                  style={{
                    backgroundColor: selectedTechnologies.includes(tech) ? '#274553' : 'transparent',
                    color: selectedTechnologies.includes(tech) ? '#ffffff' : '#cbd5e1',
                    border: `1px solid ${selectedTechnologies.includes(tech) ? '#274553' : 'rgba(39, 69, 83, 0.3)'}`,
                  }}
                  onMouseEnter={(e) => {
                    if (!selectedTechnologies.includes(tech)) {
                      e.currentTarget.style.borderColor = 'rgba(39, 69, 83, 0.5)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!selectedTechnologies.includes(tech)) {
                      e.currentTarget.style.borderColor = 'rgba(39, 69, 83, 0.3)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects count indicator */}
        <div className="mb-8 flex items-center gap-3">
          <span 
            className="font-bold uppercase tracking-[0.3em]"
            style={{
              fontSize: '10px',
              color: '#64748b',
            }}
          >
            Displaying
          </span>
          <span 
            className="text-2xl font-black"
            style={{ color: '#274553' }}
          >
            {sortedProjects.length}
          </span>
          <span 
            className="font-medium"
            style={{ color: '#94a3b8' }}
          >
            {sortedProjects.length === 1 ? 'project' : 'projects'}
          </span>
        </div>

        {/* Projects grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedProjects.map((project, index) => {
            const colors = getProjectColor(project);
            return (
              <div
                key={project.id}
                className="group p-6 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProject(project)}
                style={{
                  backgroundColor: colors.bg,
                  border: `1px solid ${colors.border}`,
                  opacity: 0,
                  animation: `fadeInUp 0.5s ease-out forwards`,
                  animationDelay: `${index * 50}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = colors.accentText;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = colors.border;
                }}
              >
                {/* Project number indicator */}
                <div className="flex items-center justify-between mb-4">
                  <span 
                    className="font-bold uppercase tracking-[0.3em]"
                    style={{
                      fontSize: '10px',
                      color: '#64748b',
                    }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  {/* Match indicator */}
                  {selectedTechnologies.length > 0 && (
                    <span 
                      className="px-2 py-1 rounded text-xs font-bold"
                      style={{
                        backgroundColor: colors.accentBg,
                        color: colors.accentText,
                        fontSize: '10px',
                      }}
                    >
                      {project.technologies.filter(t => selectedTechnologies.includes(t)).length}/{selectedTechnologies.length}
                    </span>
                  )}
                </div>

                <h3 
                  className="text-xl font-black uppercase tracking-wide mb-3"
                  style={{ 
                    color: colors.text,
                    lineHeight: '1.2',
                  }}
                >
                  {project.title}
                </h3>
                
                <p 
                  className="mb-4 text-sm leading-relaxed"
                  style={{ color: '#94a3b8' }}
                >
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map(skill => (
                    <span
                      key={skill}
                      className="text-xs rounded px-2 py-1 font-medium"
                      style={{ 
                        backgroundColor: colors.accentBg,
                        color: colors.accentText,
                        fontSize: '11px',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span
                      className="text-xs rounded px-2 py-1 font-medium"
                      style={{ 
                        backgroundColor: colors.accentBg,
                        color: colors.accentText,
                        fontSize: '11px',
                      }}
                    >
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Hover arrow indicator */}
                <div 
                  className="mt-4 pt-4 border-t flex items-center gap-2 transition-all duration-300"
                  style={{ 
                    borderColor: 'rgba(39, 69, 83, 0.2)',
                    opacity: 0,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = 1;
                  }}
                >
                  <span style={{ color: '#64748b', fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    View Details
                  </span>
                  <span style={{ color: '#274553', fontSize: '14px', fontWeight: '900' }}>→</span>
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
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Ensure Epilogue font is loaded */
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600;700;800;900&display=swap');
      `}</style>
    </section>
  );
}