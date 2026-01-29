"use client";

import Frame from "../Frame";
import { useRef } from "react";
import AnimateInView from "../AnimateInView";
import style from "./style.module.scss";
import Image from "next/image";
import { experiencesData } from "../../data/experiences";

interface Experience {
  id: number;
  title: string;
  description: string;
  startDate: Date;
  imageUrl: string;
}

const Experiences = () => {
  const experiencesContainerRef = useRef<HTMLDivElement>(null);
  const currentExperiences = experiencesData;

  return (
    <Frame>
      <AnimateInView>
        <section className={style.experiencesSection}>
          <h2 className={style.sectionTitle}>EXPERIÊNCIAS</h2>

          <div ref={experiencesContainerRef} className={style.experiencesList}>
            {currentExperiences.map((exp: Experience) => (
              <div
                key={exp.id}
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
                  <p className={style.description}>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimateInView>
    </Frame>
  );
};

export default Experiences;