export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Hi, I’m Michael
      </h1>
      
      <p className="mt-2 text-lg sm:text-xl max-w-xl leading-relaxed">
        I’m a Software Engineering Graduate passionate about building efficient, scalable software solutions.  
        I enjoy solving complex problems, designing robust systems, and turning innovative ideas into reality through clean, modern code.
      </p>

      <p className="mt-4 text-gray-300 text-sm sm:text-base max-w-md">
        Specializing in Python, JavaScript, algorithms, and full-stack development, with experience in software architecture and problem-solving across multiple domains.
      </p>

      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-500 rounded-lg text-lg font-medium hover:bg-blue-600 transition"
      >
        View My Work
      </a>

      {/* Bouncing down chevron */}
      <div className="mt-8 animate-bounce">
        <svg
          className="w-6 h-6 text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
