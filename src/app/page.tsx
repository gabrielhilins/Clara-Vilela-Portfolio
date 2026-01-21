import HorizontalScroll from './components/HorizontalScroll';
import Hero from './components/Hero';
import About from './components/About';
import Experiences from './components/Experiences';
import ComplementaryExperience from './components/ComplementaryExperiences';
import { complementaryExperiencesData } from './data/complementaryExperiences';
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
        {complementaryExperiencesData.map((experience) => (
          <ComplementaryExperience
            key={experience.id}
            imageSrc={experience.imageSrc}
            title={experience.title}
            description={experience.description}
            strategies={experience.strategies}
          />
        ))}
        <Footer />
      </HorizontalScroll>
      <hr className="globalBottomDivider" />
    </>
  );
}
