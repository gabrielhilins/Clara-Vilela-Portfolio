'use client';

import React from 'react';
import Image from 'next/image';
import style from './style.module.scss';

const DeveloperInfo: React.FC = () => {
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
            src="/Wordmark Azul.svg"
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
