export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white">
      <h1 className="text-5xl font-bold">Hi, I’m Michael </h1>
      <p className="mt-4 text-xl max-w-2xl">
        I’m a Software Engineer. ...(add more detail)
      </p>
      <a href="#projects" className="mt-6 px-6 py-3 bg-blue-500 rounded-lg text-lg font-medium hover:bg-blue-600 transition">
        View My Work
      </a>
    </section>
  );
}
