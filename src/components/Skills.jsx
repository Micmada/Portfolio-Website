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
    <section id="skills" className="py-12 px-6 max-w-7xl mx-auto" style={{ scrollMarginTop: '80px' }}>
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-gray-900 rounded-lg p-6 shadow text-center">
            <h3 className="text-xl font-semibold mb-4 text-white">{category}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="text-white px-3 py-1 bg-blue-500 rounded text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
