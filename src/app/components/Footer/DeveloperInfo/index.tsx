'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import style from './style.module.scss';
import { useTheme } from 'next-themes';

interface DeveloperInfoProps {
  forceLight?: boolean;
}

const DeveloperInfo: React.FC<DeveloperInfoProps> = ({ forceLight }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    // Render a placeholder or null on the server to avoid hydration mismatch
    return null; 
  }

  const isDark = theme === 'dark' && !forceLight;
  const wordmarkSrc = isDark ? '/Wordmark SVG.svg' : '/Wordmark Azul.svg';

  return (
    <div className={style.columnDev}>
      <div className={style.devContent}>
        <span className={style.developerText}>desenvolvido por</span>
        <a
          href="https://ggabstechdesign.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className={style.wordmarkLink}
        >
          <Image
            src={wordmarkSrc}
            alt="GGABS Tech & Design"
            className={style.wordmarkImage}
            width={100}
            height={20}
          />
        </a>
      </div>
    </div>
  );
};

export default DeveloperInfo;
