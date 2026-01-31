"use client";

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Frame from '../Frame';
import AnimateInView from '../AnimateInView';
import style from './style.module.scss';
import { skillsData } from '../../data/skills';
import SkillCategory from './SkillCategory';

const Skills = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const getThemedLogoUrl = (logoUrl: string) => {
    if (!mounted || !logoUrl.endsWith('.svg')) {
      return logoUrl;
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
            <SkillCategory 
              title="Softwares" 
              skills={skillsData.softwares} 
              getThemedLogoUrl={getThemedLogoUrl} 
            />
            <SkillCategory 
              title="Design" 
              skills={skillsData.design} 
              getThemedLogoUrl={getThemedLogoUrl} 
            />
            <SkillCategory 
              title="Idiomas" 
              skills={skillsData.idiomas} 
              getThemedLogoUrl={getThemedLogoUrl} 
            />
          </div>
        </section>
      </AnimateInView>
    </Frame>
  );
};

export default Skills;
