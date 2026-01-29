import HorizontalScroll from "./components/HorizontalScroll";
import Hero from "./components/Hero";
import About from "./components/About";
import Experiences from "./components/Experiences";
import ComplementaryExperienceCard from "./components/ComplementaryExperienceCard";
import { complementaryExperiencesData } from "./data/complementaryExperiences";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Frame from "./components/Frame";
import AnimateInView from "./components/AnimateInView";

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
        <Frame>
          <AnimateInView>
            <section className="complementary-experiences-section">
              <h2 className="section-title">Experiências Complementares</h2>
              <div className="cards-container">
                {complementaryExperiencesData.map((experience) => (
                  <ComplementaryExperienceCard
                    key={experience.id}
                    experience={experience}
                  />
                ))}
              </div>
            </section>
          </AnimateInView>
        </Frame>
        <Footer />
      </HorizontalScroll>
      <hr className="globalBottomDivider" />
    </>
  );
}
