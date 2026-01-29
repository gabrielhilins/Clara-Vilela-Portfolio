"use client";

import Frame from "../../components/Frame";
import AnimateInView from "../../components/AnimateInView";
import style from "./style.module.scss";
import BentoGrid from "../../components/BentoGrid";
import ModalCarousel from "../../components/ModalCarousel";

import { AiFillPicture } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { complementaryExperiencesData } from "@/app/data/complementaryExperiences";
import Image from "next/image";

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
      <AnimateInView>
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
      </AnimateInView>
    </Frame>
  );
};

export default ComplementaryExperiencePage;
