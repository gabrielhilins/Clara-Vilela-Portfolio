"use client";

import Frame from "../Frame";
import { useRef } from "react";
import AnimateInView from "../AnimateInView";
import style from "./style.module.scss";
import Image from "next/image";
import { experiencesData } from "../../data/experiences";
import useMediaQuery from "../../hooks/useMediaQuery";

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Experience {
  id: number;
  title: string;
  description: string;
  summary: string;
  startDate: Date;
  imageUrl: string;
}

const Experiences = () => {
  const experiencesContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const currentExperiences = experiencesData;

  const renderExperienceItem = (exp: Experience) => (
    <div
      className={`${style.experienceItem} ${
        exp.id % 2 !== 0 ? style.itemLeft : style.itemRight
      }`}
    >
      <div className={style.imageWrapper}>
        <Image
          src={exp.imageUrl}
          alt={exp.title}
          width={250}
          height={250}
          className={style.profileImage}
        />
      </div>

      <div className={style.textContainer}>
        <div className={style.titleWrapper}>
          <h3 className={style.experienceTitle}>{exp.title}</h3>
          <hr className={style.titleLine} />
        </div>
        <p className={style.description}>
          {isMobile ? exp.summary : exp.description}
        </p>
      </div>
    </div>
  );

  return (
    <Frame>
      <AnimateInView>
        <section className={style.experiencesSection}>
          <h2 className={style.sectionTitle}>EXPERIÊNCIAS</h2>

          <div ref={experiencesContainerRef} className={style.experiencesList}>
            {isMobile ? (
              <Swiper spaceBetween={15} slidesPerView={"auto"} className={style.swiperContainer}>
                {currentExperiences.map((exp: Experience) => (
                  <SwiperSlide key={exp.id} className={style.swiperSlide}>
                    {renderExperienceItem(exp)}
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              currentExperiences.map((exp: Experience) => (
                <div key={exp.id}>{renderExperienceItem(exp)}</div>
              ))
            )}
          </div>
        </section>
      </AnimateInView>
    </Frame>
  );
};

export default Experiences;