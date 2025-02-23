import React from 'react';
import { useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scrolling for hash links
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove '#' from hash
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // Handle initial load and hash changes
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup event listener
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Timeline id="timeline" />
      <Projects id="projects" />
      <Footer id="footer" />
    </div>
  );
}

export default App;