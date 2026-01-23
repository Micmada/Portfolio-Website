import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import SEO from "./components/SEO";
import SchemaMarkup from "./components/SchemaMarkup";


export default function App() {
  return (
    <>
      <SEO />
      <SchemaMarkup />
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

