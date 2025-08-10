import { useState, useEffect } from 'react';

const skills = ['React', 'Node.js', 'Tailwind', 'TypeScript'];

const projects = [
  {
    id: '1',
    title: 'Portfolio Website',
    skills: ['React', 'Tailwind'],
    description: 'My personal portfolio site',
    details: `This project is a React-based portfolio site styled with Tailwind CSS. It showcases my work, skills, and contact info. Features include responsive design, filterable projects, and smooth scrolling navigation.`,
    hostedUrl: 'https://yourportfolio.com',
    github: {
      repoTitle: 'Portfolio GitHub Repo',
      repoUrl: 'https://github.com/yourusername/portfolio',
      contributionChartUrl: 'https://ghchart.rshah.org/yourusername',
      commitsApiUrl: 'https://api.github.com/repos/yourusername/portfolio/commits',
    },
  },
  // add other projects here...
];

function ProjectDetail({ project, onClose }) {
  const [commits, setCommits] = useState([]);
  const [commitsError, setCommitsError] = useState(null);

  useEffect(() => {
    if (project?.github?.commitsApiUrl) {
      fetch(project.github.commitsApiUrl)
        .then((res) => {
          if (!res.ok) throw new Error('Failed to fetch commits');
          return res.json();
        })
        .then((data) => {
          setCommits(data.slice(0, 5));
        })
        .catch((err) => setCommitsError(err.message));
    }
  }, [project]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-6 overflow-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-full overflow-y-auto p-8 text-gray-100"
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: 'rgba(0, 0, 0, 1)', borderRadius: '0.5rem' }}
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
            <span
              key={skill}
              className="bg-blue-700 text-blue-300 rounded-full px-4 py-1 text-sm font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>

        <p className="mb-6 text-lg leading-relaxed">{project.details}</p>

        {project.hostedUrl && (
          <a
            href={project.hostedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-6 bg-green-600 text-white hover:bg-green-700 transition px-5 py-3 rounded font-semibold shadow w-max"
          >
            View Live Site
          </a>
        )}

        {project.github && (
          <section className="p-6 rounded-lg shadow bg-gray-800 bg-opacity-70">
            <h2 className="text-2xl font-bold mb-4">{project.github.repoTitle}</h2>

            <a
              href={project.github.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 underline mb-6 inline-block"
            >
              Visit GitHub Repository
            </a>

            {project.github.contributionChartUrl && (
              <img
                src={project.github.contributionChartUrl}
                alt="GitHub contribution chart"
                className="mb-6 rounded"
              />
            )}

            <div>
              <h3 className="text-xl font-semibold mb-3">Recent Commits</h3>

              {commitsError && (
                <p className="text-red-500 mb-4">Error loading commits: {commitsError}</p>
              )}

              {!commitsError && commits.length === 0 && (
                <p className="text-gray-400 mb-4">Loading commits...</p>
              )}

              <ul className="list-disc list-inside space-y-2 max-h-48 overflow-auto">
                {commits.map((commit) => (
                  <li key={commit.sha}>
                    <a
                      href={commit.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
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
      </div>
    </div>
  );
}

export default function Projects() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  function toggleSkill(skill) {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  }

  const filteredProjects = projects
    .map((project) => {
      const matchedSkills = project.skills.filter((skill) =>
        selectedSkills.includes(skill)
      );
      return { ...project, matchCount: matchedSkills.length };
    })
    .filter((project) => selectedSkills.length === 0 || project.matchCount > 0)
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
            className={`px-4 py-2 rounded ${
              selectedSkills.includes(skill)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-900'
            }`}
            onClick={() => toggleSkill(skill)}
          >
            {skill}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map(({ id, title, description, skills, matchCount }) => (
          <div
            key={id}
            className={`p-6 border rounded shadow hover:shadow-lg transition cursor-pointer text-gray-900 ${getMatchColor(
              matchCount
            )}`}
            onClick={() => setSelectedProject(projects.find((p) => p.id === id))}
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs bg-gray-300 rounded px-2 py-1"
                >
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
