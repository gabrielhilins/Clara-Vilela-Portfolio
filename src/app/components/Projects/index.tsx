import Frame from '../Frame';
import AnimateInView from '../AnimateInView';
import style from './style.module.scss';
import { projectsData } from '../../data/projects';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';

const truncateText = (text: string, limit: number) => {
  if (text.length <= limit) {
    return text;
  }
  return text.slice(0, limit) + '...';
};

const Projects = () => {
  return (
    <Frame>
      <AnimateInView>
        <section className={style.projectsSection}>
        <h2 className={style.sectionTitle}>PROJETOS</h2>
        <div className={style.projectsContainer}>
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className={style.projectPanel}
            >
              <Image 
                src={project.imageUrl} 
                alt={project.title} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div className={style.panelContent}>
                <span className={style.projectNumber}>{project.projectNumber}</span>
                <div className={style.projectDetails}>
                  <h3>{project.title}</h3>
                  <p>{truncateText(project.description, 120)}</p>
                  <Link href={project.url} className={style.learnMoreButton}>
                    <span>Saiba mais</span>
                    <FiArrowUpRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      </AnimateInView>
    </Frame>
  );
};

export default Projects;