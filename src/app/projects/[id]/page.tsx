"use client";

import Frame from '../../components/Frame';
import AnimateInView from '../../components/AnimateInView';
import style from './style.module.scss';
import BentoGrid from '../../components/BentoGrid';
import ModalCarousel from '../../components/ModalCarousel';
import { AiFillPicture } from "react-icons/ai";
import { IoArrowBack } from 'react-icons/io5'; 
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { projectsData } from '@/app/data/projects';

const ProjectPage = () => {
  const params = useParams();
  const router = useRouter(); 
  const projectId = params.id;

  const project = projectsData.find(p => p.url === `/projects/${projectId}`);

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

  return (
    <Frame>
      <AnimateInView>
        <section className={style.projectPageSection}>
        <button className={style.backButton} onClick={() => router.push('/')}>
          <IoArrowBack /> Voltar para página inicial
        </button>
        <h2 className={style.sectionTitle}>PROJETOS</h2>
        <div className={style.contentContainer}>
          <div className={style.leftColumn}>
            <BentoGrid images={project.images} onImageClick={openModal} />
            <button className={style.viewGalleryButton} onClick={() => openModal(0)}>
              <AiFillPicture /> Ver galeria completa do projeto
            </button>
          </div>
          <div className={style.rightColumn}>
            <h3>{project.title}</h3>
            <hr className={style.titleHr} />
            <p>{project.description}</p>

            <div className={style.strategiesSection}>
              <h4>Estratégias utilizadas</h4>
              <ul className={style.strategiesList}>
                {project.strategies.map((strategy, index) => (
                  <li key={index}>{strategy}</li>
                ))}
              </ul>
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
      </AnimateInView>
    </Frame>
  );
};

export default ProjectPage;
