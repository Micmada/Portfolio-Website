export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20"
      style={{ backgroundColor: '#1E1E2E', color: '#D4D4D4', scrollMarginTop: '80px' }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6" style={{ color: '#569CD6' }}>
          Get in Touch
        </h2>
        <a
          href="mailto:michael.eddleston@icloud.com"
          className="px-6 py-3 rounded-lg font-semibold shadow transition"
          style={{
            backgroundColor: '#569CD6',
            color: '#1E1E2E',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#478FCB'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#569CD6'}
        >
          Email Me
        </a>
      </div>
    </section>
  );
}
