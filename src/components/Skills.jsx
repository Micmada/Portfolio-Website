export default function Skills() {
  const skills = [
    "JavaScript", "React", "Node.js", "Tailwind CSS",
    "Python", "SQL", "Git/GitHub"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map(skill => (
            <div key={skill} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
