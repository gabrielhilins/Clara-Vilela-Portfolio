"use client";

import Frame from "../Frame";
import AnimateInView from "../AnimateInView";
import style from "./style.module.scss";
import Image from "next/image";

interface ComplementaryExperienceProps {
  imageSrc: string;
  title: string;
  description: string;
  strategies: string[];
}

const ComplementaryExperience: React.FC<ComplementaryExperienceProps> = ({
  imageSrc,
  title,
  description,
  strategies,
}) => {
  return (
    <Frame>
      <AnimateInView>
        <section className={style.complementaryExperienceSection}>
          <h2 className={style.sectionTitle}>EXPERIÊNCIAS COMPLEMENTARES</h2>
          <div className={style.contentContainer}>
            <div className={style.leftColumn}>
              <div className={style.imageWrapper}>
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
            <div className={style.rightColumn}>
              <h3>{title}</h3>
              <hr className={style.titleHr} />
              <p>{description}</p>
              <div className={style.strategiesSection}>
                <h4>Habilidades desenvolvidas</h4>
                <ul className={style.strategiesList}>
                  {strategies.map((strategy, index) => (
                    <li key={index}>{strategy}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimateInView>
    </Frame>
  );
};

export default ComplementaryExperience;
