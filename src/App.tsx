import './App.css';
import { useEffect, useState } from 'react';
import Certifications from './components/Certifications';
import About from './components/About';
import CustomCursor from './components/CustomCursor';
import Education from './components/Education';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Awards from './components/Awards';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Socials from './components/Socials';
import Stats from './components/Stats';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
      return;
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('theme-dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div className="app">
      <CustomCursor />
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Stats />
      <Projects />
      <Experience />
      <Awards />
      <Skills />
      <Certifications />
      <Education />
      <Socials />
    </div>
  );
}

export default App;
