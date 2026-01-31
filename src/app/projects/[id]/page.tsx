"use client";

import Frame from "../../components/Frame";
import style from "./style.module.scss";
import BentoGrid from "../../components/BentoGrid";
import ModalCarousel from "../../components/ModalCarousel";

import { AiFillPicture } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";
import { MdOutlineSlideshow } from "react-icons/md";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { projectsData } from "@/app/data/projects";
import { skillsData } from "@/app/data/skills";
import Image from "next/image";

const ProjectPage = () => {
  const params = useParams();
  const router = useRouter();
  const projectId = params.id;

  const project = projectsData.find((p) => p.url === `/projects/${projectId}`);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!project) {
    return (
      <Frame>
        <div className={style.projectNotFound}>
          <h2>Projeto não encontrado</h2>
        </div>
      </Frame>
    );
  }

  const allSkills = [
    ...skillsData.softwares,
    ...skillsData.design,
    ...skillsData.idiomas,
    ...skillsData.others,
  ];

  const getSkillFromUrl = (url: string) => {
    return allSkills.find((s) => s.logoUrl === url);
  };

  return (
    <Frame>
        <section className={style.projectPageSection}>
          <button
            className={style.backButton}
            onClick={() => router.push("/")}
          >
            <IoArrowBack /> Voltar para página inicial
          </button>

          <h2 className={style.sectionTitle}>PROJETOS</h2>

          <div className={style.contentContainer}>
            <div className={style.leftColumn}>
              <BentoGrid images={project.images} onImageClick={openModal} />
              <button
                className={style.viewGalleryButton}
                onClick={() => openModal(0)}
              >
                <AiFillPicture /> Ver galeria completa do projeto
              </button>
            </div>

            <div className={style.rightColumn}>
              <h3>{project.title}</h3>
              <hr className={style.titleHr} />
              <p>{project.description}</p>

              <div className={style.strategiesSection}>
                <h4>Softwares utilizados</h4>

                <div className={style.strategiesRow}>
                  <ul className={style.strategiesList}>
                    {project.softwares.map((softwareUrl, index) => {
                      const skill = getSkillFromUrl(softwareUrl);
                      const softwareName = skill ? skill.name : "";
                      return (
                        <li key={index} title={softwareName}>
                          <Image
                            src={softwareUrl}
                            alt={`${softwareName} logo`}
                            width={36}
                            height={36}
                          />
                        </li>
                      );
                    })}
                  </ul>

                  <button
                    className={style.seeMoreProjectButton}
                    onClick={() => window.open(project.presentationUrl, '_blank')}
                  >
                    <MdOutlineSlideshow />
                    Acesse a apresentação final do projeto
                  </button>
                </div>
              </div>
            </div>
          </div>

          {isModalOpen && (
            <ModalCarousel
              images={project.images}
              initialIndex={selectedImageIndex}
              onClose={closeModal}
            />
          )}
        </section>
    </Frame>
  );
};

export default ProjectPage;
