export default function Footer() {
  return (
    <footer
      className="py-8 border-t"
      style={{ 
        backgroundColor: '#FFFFFF', 
        borderColor: '#E0E0E0' 
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p 
            className="text-sm"
            style={{ color: '#888888' }}
          >
            © {new Date().getFullYear()} Michael Eddleston. All rights reserved.
          </p>
          <p 
            className="text-sm"
            style={{ color: '#888888' }}
          >
            Designed & built with <span style={{ color: '#FF6B6B' }}>care</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}