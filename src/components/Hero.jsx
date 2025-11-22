export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4"
      style={{ backgroundColor: '#1E1E2E', color: '#D4D4D4' }}
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#569CD6' }}>
        Hi, I’m Michael
      </h1>
      
      <p className="mt-2 text-lg sm:text-xl max-w-xl leading-relaxed" style={{ color: '#D4D4D4' }}>
        I’m a Software Engineering Graduate passionate about building efficient, scalable software solutions.  
        I enjoy solving complex problems, designing robust systems, and turning innovative ideas into reality through clean, modern code.
      </p>

      <p className="mt-4 text-sm sm:text-base max-w-md" style={{ color: '#A0A0B0' }}>
        Specializing in Python, JavaScript, algorithms, and full-stack development, with experience in software architecture and problem-solving across multiple domains.
      </p>

      <a
        href="#projects"
        className="mt-6 px-6 py-3 rounded-lg text-lg font-medium transition"
        style={{ backgroundColor: '#569CD6', color: '#1E1E2E' }}
        onMouseEnter={(e) => { e.target.style.backgroundColor = '#478FCB'; }}
        onMouseLeave={(e) => { e.target.style.backgroundColor = '#569CD6'; }}
      >
        View My Work
      </a>

      {/* Bouncing down chevron */}
      <div className="mt-8 animate-bounce">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="#569CD6"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
