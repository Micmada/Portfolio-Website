export default function Skills() {
  const skills = {
    Languages: ['Python', 'JavaScript', 'Go', 'SQL', 'HTML', 'CSS'],
    Technologies: [
      'React',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB / Mongoose',
      'Flask',
      'Django',
      'Streamlit',
      'Git / GitHub',
      'Jenkins',
      'Gerrit'
    ],
    Other: [
      'Object-Oriented Programming (OOP)',
      'RESTful API design',
      'Data Analysis & Visualization',
      'Agile / Scrum methodology',
      'Test automation / Unit testing',
      'Continuous Integration / Deployment',
      'Version control workflows'
    ],
  };

  return (
    <section
      id="skills"
      className="w-full py-12"
      style={{ backgroundColor: '#1E1E2E', color: '#D4D4D4', scrollMarginTop: '80px' }}
    >
<div
  className="h-1.5 rounded-full bg-[#569CD6] mx-auto mb-6"
  style={{
    width: 'clamp(100px, 90vw, 300px)', // min 60px, 15% of viewport width, max 200px
  }}
></div>

      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-3xl font-bold mb-6 text-center"
          style={{ color: '#569CD6' }}
        >
          Skills
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="rounded-lg p-6 shadow text-center"
              style={{ backgroundColor: '#252536', color: '#D4D4D4' }}
            >
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: '#569CD6' }}
              >
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded font-medium"
                    style={{ backgroundColor: '#CE9178', color: '#1E1E2E' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 