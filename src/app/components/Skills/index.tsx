"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Frame from '../Frame';
import AnimateInView from '../AnimateInView';
import style from './style.module.scss';
import { skillsData } from '../../data/skills';
import Image from 'next/image';

const Skills = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const getThemedLogoUrl = (logoUrl: string) => {
    if (!mounted || !logoUrl.endsWith('.svg')) {
      return logoUrl; // Return original URL on server, before mount, or if not an SVG
    }
    if (theme === 'dark') {
      return logoUrl.replace('.svg', '_white.svg');
    }
    return logoUrl;
  };

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
                      <Image src={getThemedLogoUrl(skill.logoUrl)} alt={`${skill.name} logo`} width={50} height={50} />
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
                      <Image src={getThemedLogoUrl(skill.logoUrl)} alt={`${skill.name} logo`} width={50} height={50} />
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
                      <Image src={getThemedLogoUrl(skill.logoUrl)} alt={`${skill.name} logo`} width={50} height={50} />
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
