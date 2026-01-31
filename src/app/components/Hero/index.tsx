"use client";

import Frame from '../Frame';
import AnimateInView from '../AnimateInView';
import style from './style.module.scss';
import Image from 'next/image';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const sunImageSrc = mounted && theme === 'dark' ? '/Sun 1_white.png' : '/Sun 1.png';

  return (
    <Frame>
      <AnimateInView>
        <section className={style.heroSection}>
        <div className={style.heroImagePlaceholder}>
          <Image src={sunImageSrc} alt='Sol' width={120} height={120} />
        </div>
        <h1 className={style.title}>PORTFÓLIO</h1>
        <p className={style.subtitle}>Clara Vilela</p>
        <p className={style.yearText}>2026</p>
        <ThemeSwitcher />
      </section>
      </AnimateInView>
    </Frame>
  );
};

export default Hero;
