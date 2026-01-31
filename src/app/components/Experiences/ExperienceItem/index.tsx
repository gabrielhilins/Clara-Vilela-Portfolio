"use client";

import Image from 'next/image';
import style from '../style.module.scss';
import useMediaQuery from '../../../hooks/useMediaQuery';

interface Experience {
  id: number;
  title: string;
  description: string;
  summary: string;
  startDate: Date;
  imageUrl: string;
}

interface ExperienceItemProps {
  experience: Experience;
  getThemedImageUrl: (imageUrl: string) => string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience, getThemedImageUrl }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      className={`${style.experienceItem} ${
        experience.id % 2 !== 0 ? style.itemLeft : style.itemRight
      }`}
    >
      <div className={style.imageWrapper}>
        <Image
          src={getThemedImageUrl(experience.imageUrl)}
          alt={experience.title}
          width={250}
          height={250}
          className={style.profileImage}
        />
      </div>

      <div className={style.textContainer}>
        <div className={style.titleWrapper}>
          <h3 className={style.experienceTitle}>{experience.title}</h3>
          <hr className={style.titleLine} />
        </div>
        <p className={style.description}>
          {isMobile ? experience.summary : experience.description}
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;
