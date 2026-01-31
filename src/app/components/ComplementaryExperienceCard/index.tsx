"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./style.module.scss";
import { LuArrowUpRight } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon
import AnimateInView from "../AnimateInView";

interface ComplementaryExperienceCardProps {
  experience: {
    id: string;
    title: string;
    imagesSrc: string[];
    description: string;
  };
}

const ComplementaryExperienceCard: React.FC<
  ComplementaryExperienceCardProps
> = ({ experience }) => {
const description = experience.description;

  return (
    <AnimateInView>
      <Link
        href={`/complementary-experiences/${experience.id}`}
        className={styles.card}
      >
        <div className={styles.imageWrapper}>
          <Image
            src={experience.imagesSrc[0]}
            alt={experience.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 900px"
            className={styles.image}
          />
        </div>

        <div className={styles.cardContent}>
          <div className={styles.textContent}>
            <h3>{experience.title}</h3>
            <hr className={styles.hr}></hr>
            <p>{description}</p>
          </div>

          <div className={styles.cardActions}> {/* New wrapper div */}
            <span className={styles.learnMoreButton}>
              <LuArrowUpRight /> Saiba mais
            </span>
            <a
              href="https://www.instagram.com/artes.e.kids/" 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instagramIcon}
              aria-label="Instagram Arte e Kids"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </Link>
    </AnimateInView>
  );
};

export default ComplementaryExperienceCard;
