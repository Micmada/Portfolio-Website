import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SEO from "./components/SEO";
import SchemaMarkup from "./components/SchemaMarkup";

export default function App() {
  const [projectOpen, setProjectOpen] = useState(false);

  return (
    <>
      <SEO />
      <SchemaMarkup />
      <Navbar projectOpen={projectOpen} />
      <main style={{ paddingTop: 'var(--navbar-height)' }}>
        <Hero />
        <Skills />
        <Experience />
        <Projects onProjectOpen={setProjectOpen} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}