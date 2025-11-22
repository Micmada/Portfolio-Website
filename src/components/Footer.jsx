export default function Footer() {
  return (
    <footer
      className="py-6 text-center"
      style={{ backgroundColor: '#1E1E2E', color: '#D4D4D4' }}
    >
      <span style={{ color: '#569CD6' }}>© {new Date().getFullYear()} Michael Eddleston.</span> All rights reserved.
    </footer>
  );
}
