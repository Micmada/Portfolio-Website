import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pantheon from "./components/Pantheon";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main" style={{ paddingTop: 'var(--navbar-height)' }}>
        <Hero />
        <Pantheon />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
