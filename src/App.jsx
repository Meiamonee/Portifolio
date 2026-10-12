import { Intro } from './components/Intro';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { usePageEffects } from './hooks/usePageEffects';

export default function App() {
  usePageEffects();
  return (
    <>
      <Intro />
      <div className="page">
        <Navigation />
        <Hero />
        <Marquee />
        <main>
          <About />
          <Skills />
          <Projects />
          <Experience />
        </main>
        <Contact />
      </div>
    </>
  );
}
