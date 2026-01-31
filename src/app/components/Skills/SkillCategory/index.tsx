"use client";

import Image from 'next/image';
import style from '../style.module.scss';

interface Skill {
  name: string;
  level: string;
  logoUrl: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
  getThemedLogoUrl: (logoUrl: string) => string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, getThemedLogoUrl }) => {
  return (
    <div className={style.category}>
      <h3 className={style.categoryTitle}>{title}</h3>
      <div className={style.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={style.skillItem}>
            <div className={style.skillHeader}>
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
  );
};

export default SkillCategory;
