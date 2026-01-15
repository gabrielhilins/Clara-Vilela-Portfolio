import React from 'react';
import Image from 'next/image';
import style from './style.module.scss';


interface FrameProps {
  children: React.ReactNode;
}

const Frame: React.FC<FrameProps> = ({ children }) => {
  return (
    <div className={style.frameContainer}>
      {}
      <div className={`${style.verticalLine} ${style.leftLine}`}></div>
      <div className={`${style.verticalLine} ${style.rightLine}`}></div>
      <hr className={`${style.divider} ${style.topDivider}`} />
      
      <div className={`${style.cornerSquare} ${style.topLeft}`}>
        <Image src="/Canto Royal.png" alt="Corner Decoration" layout="fill" objectFit="contain" />
      </div>
      <div className={`${style.cornerSquare} ${style.topRight}`}>
        <Image src="/Canto Royal.png" alt="Corner Decoration" layout="fill" objectFit="contain" />
      </div>
      <div className={`${style.cornerSquare} ${style.bottomLeft}`}>
        <Image src="/Canto Royal.png" alt="Corner Decoration" layout="fill" objectFit="contain" />
      </div>
      <div className={`${style.cornerSquare} ${style.bottomRight}`}>
        <Image src="/Canto Royal.png" alt="Corner Decoration" layout="fill" objectFit="contain" />
      </div>
      
      <main className={style.frameContent}>
        {children}
      </main>

      <hr className={`${style.divider} ${style.bottomDivider}`} />
    </div>
  );
};

export default Frame;