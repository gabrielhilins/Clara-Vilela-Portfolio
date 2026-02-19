import React from 'react';
import Image from 'next/image';
import style from './style.module.scss';


interface FrameProps {
  children: React.ReactNode;
  forceLight?: boolean;
}

const Frame: React.FC<FrameProps> = ({ children, forceLight }) => {
  return (
    <div className={`${style.frameContainer} ${forceLight ? style.forceLight : ''}`}>
      {}
      <div className={`${style.verticalLine} ${style.leftLine}`}></div>
      <div className={`${style.verticalLine} ${style.rightLine}`}></div>
      <hr className={`${style.divider} ${style.topDivider}`} />
      
      <div className={`${style.cornerSquare} ${style.topLeft}`}>
        <Image src="/Canto Royal.png" alt="Corner Decoration" layout="fill" objectFit="contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className={`${style.cornerSquare} ${style.topRight}`}>
        <Image src="/Canto Royal.png" alt="Corner Decoration" layout="fill" objectFit="contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className={`${style.cornerSquare} ${style.bottomLeft}`}>
        <Image src="/Canto Royal.png" alt="Corner Decoration" layout="fill" objectFit="contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className={`${style.cornerSquare} ${style.bottomRight}`}>
        <Image src="/Canto Royal.png" alt="Corner Decoration" layout="fill" objectFit="contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      
      <main className={style.frameContent}>
        {children}
      </main>

      <hr className={`${style.divider} ${style.bottomDivider}`} />
    </div>
  );
};

export default Frame;