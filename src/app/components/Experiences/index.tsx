"use client";

import Frame from "../Frame";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import AnimateInView from "../AnimateInView";
import style from "./style.module.scss";
import { experiencesData } from "../../data/experiences";
import useMediaQuery from "../../hooks/useMediaQuery";
import ExperienceItem from "./ExperienceItem";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Experiences = () => {
  const experiencesContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const currentExperiences = experiencesData;

  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const getThemedImageUrl = (imageUrl: string) => {
    if (!mounted || !imageUrl.endsWith('.png')) {
      return imageUrl;
    }
    if (theme === 'dark') {
      return imageUrl.replace('.png', '_white.png');
    }
    return imageUrl;
  };

  return (
    <Frame>
      <AnimateInView>
        <section className={style.experiencesSection}>
          <h2 className={style.sectionTitle}>EXPERIÊNCIAS</h2>

          <div ref={experiencesContainerRef} className={style.experiencesList}>
            {isMobile ? (
              <Swiper spaceBetween={15} slidesPerView={"auto"} className={style.swiperContainer}>
                {currentExperiences.map((exp) => (
                  <SwiperSlide key={exp.id} className={style.swiperSlide}>
                    <ExperienceItem experience={exp} getThemedImageUrl={getThemedImageUrl} />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              currentExperiences.map((exp) => (
                <ExperienceItem key={exp.id} experience={exp} getThemedImageUrl={getThemedImageUrl} />
              ))
            )}
          </div>
        </section>
      </AnimateInView>
    </Frame>
  );
};

export default Experiences;