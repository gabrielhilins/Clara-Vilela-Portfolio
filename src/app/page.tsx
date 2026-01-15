import HorizontalScroll from './components/HorizontalScroll';
import Hero from './components/Hero';
import About from './components/About';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <hr className="globalTopDivider" />
      <HorizontalScroll>
        <Hero />
        <About />
        <Experiences />
        <Skills />
        <Projects />
        <Footer />
      </HorizontalScroll>
      <hr className="globalBottomDivider" />
    </>
  );
}
