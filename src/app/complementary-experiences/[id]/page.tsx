"use client";

import Frame from "../../components/Frame";
import style from "./style.module.scss";
import BentoGrid from "../../components/BentoGrid";
import ModalCarousel from "../../components/ModalCarousel";

import { AiFillPicture } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { complementaryExperiencesData } from "@/app/data/complementaryExperiences";

const ComplementaryExperiencePage = () => {
  const params = useParams();
  const router = useRouter();
  const experienceId = params.id;

  const experience = complementaryExperiencesData.find(
    (e) => e.id === experienceId
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!experience) {
    return (
      <Frame>
        <div className={style.projectNotFound}>
          <h2>Experiência não encontrada</h2>
        </div>
      </Frame>
    );
  }

  return (
    <Frame>
        <section className={style.projectPageSection}>
          <button
            className={style.backButton}
            onClick={() => router.push("/")}
          >
            <IoArrowBack /> Voltar para página inicial
          </button>

          <h2 className={style.sectionTitle}>EXPERIÊNCIAS COMPLEMENTARES</h2>

          <div className={style.contentContainer}>
            <div className={style.leftColumn}>
              <BentoGrid images={experience.imagesSrc} onImageClick={openModal} />
              <button
                className={style.viewGalleryButton}
                onClick={() => openModal(0)}
              >
                <AiFillPicture /> Ver galeria completa da experiência
              </button>
            </div>

            <div className={style.rightColumn}>
              <h3>{experience.title}</h3>
              <hr className={style.titleHr} />
              <p>{experience.description}</p>

              {experience.instagramUrl && (
                <a
                  href={experience.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.instagramButton}
                  aria-label="Visitar Instagram Arte e Kids"
                >
                  <FaInstagram /> Visitar Instagram Arte e Kids
                </a>
              )}

              <div className={style.strategiesSection}>
                <h4>Estratégias</h4>

                <div className={style.strategiesRow}>
                  <ul className={style.strategiesList}>
                    {experience.strategies.map((strategy, index) => (
                      <li key={index}>
                        <span>{strategy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {isModalOpen && (
            <ModalCarousel
              images={experience.imagesSrc}
              initialIndex={selectedImageIndex}
              onClose={closeModal}
            />
          )}
        </section>
    </Frame>
  );
};

export default ComplementaryExperiencePage;
