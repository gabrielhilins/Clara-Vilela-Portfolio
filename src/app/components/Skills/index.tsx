import Frame from '../Frame';
import AnimateInView from '../AnimateInView';
import style from './style.module.scss';
import { skillsData } from '../../data/skills';
import Image from 'next/image';

const Skills = () => {
  return (
    <Frame>
      <AnimateInView>
        <section className={style.skillsSection}>
        <h2 className={style.sectionTitle}>HABILIDADES</h2>
        
        <div className={style.categoriesContainer}>
          <div className={style.category}>
            <h3 className={style.categoryTitle}>Softwares</h3>
            <div className={style.skillsGrid}>
              {skillsData.softwares.map((skill, index) => (
                <div key={index} className={style.skillItem}>
                  <div className={style.skillHeader}> {}
                    <div className={style.skillLogo}>
                      <Image src={skill.logoUrl} alt={`${skill.name} logo`} width={50} height={50} />
                    </div>
                    <span className={style.skillName}>{skill.name}</span>
                  </div>
                  <span className={style.skillLevel}>{skill.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={style.category}>
            <h3 className={style.categoryTitle}>Design</h3>
            <div className={style.skillsGrid}>
              {skillsData.design.map((skill, index) => (
                <div key={index} className={style.skillItem}>
                  <div className={style.skillHeader}> {}
                    <div className={style.skillLogo}>
                      <Image src={skill.logoUrl} alt={`${skill.name} logo`} width={50} height={50} />
                    </div>
                    <span className={style.skillName}>{skill.name}</span>
                  </div>
                  <span className={style.skillLevel}>{skill.level}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={style.category}>
            <h3 className={style.categoryTitle}>Idiomas</h3>
            <div className={style.skillsGrid}>
              {skillsData.idiomas.map((skill, index) => (
                <div key={index} className={style.skillItem}>
                  <div className={style.skillHeader}> {}
                    <div className={style.skillLogo}>
                      <Image src={skill.logoUrl} alt={`${skill.name} logo`} width={50} height={50} />
                    </div>
                    <span className={style.skillName}>{skill.name}</span>
                  </div>
                  <span className={style.skillLevel}>{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </AnimateInView>
    </Frame>
  );
};

export default Skills;
