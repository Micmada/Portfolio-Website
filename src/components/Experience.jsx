export default function Experience() {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "ARM",
      location: "Cambridge",
      period: "June 2023 – March 2025",
      description: "Developed and automated tools for generating the ARM Architecture Reference Manual, contributing to cutting-edge software platforms that met industry standards for efficiency, performance, and test coverage.",
      bullets: [
        "Applied Object-Oriented Programming (OOP) in Python to improve automation processes, enhancing workflow efficiency and accuracy.",
        "Updated, fixed, and enhanced in-house software platforms.",
        "Worked in an Agile environment, using Gerrit for code reviews and Jenkins to establish a continuous integration pipeline, speeding up build and test processes.",
        "Gained hands-on experience with large-scale software systems and automated documentation flows."
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto" style={{ scrollMarginTop: '80px' }}>
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center">Experience</h2>
      <div className="space-y-10">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-gray-900 text-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
              <h3 className="text-2xl sm:text-3xl font-semibold">{exp.title}</h3>
              <p className="text-gray-400 italic mt-1 sm:mt-0">{exp.company} • {exp.location}</p>
            </div>
            <p className="text-gray-400 italic mb-4">{exp.period}</p>
            <p className="mb-4">{exp.description}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="pl-1">{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
