import './App.css';
import Certifications from './components/Certifications';
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
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Stats />
      <Projects />
      <Experience />
      <Awards />
      <Socials />
      <Skills />
      <Certifications />
      <Education />
    </div>
  );
}

export default App;
