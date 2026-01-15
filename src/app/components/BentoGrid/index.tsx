import React from 'react';
import style from './style.module.scss';
import Image from 'next/image';

interface BentoGridProps {
  images: string[];
  onImageClick: (index: number) => void;
}

const BentoGrid: React.FC<BentoGridProps> = ({ images, onImageClick }) => {
  return (
    <div className={style.bentoGrid}>
      {images.map((src, index) => (
        <div
          key={index}
          className={style.bentoItem}
          onClick={() => onImageClick(index)}
        >
          <Image 
            src={src} 
            alt={`Project image ${index + 1}`} 
            layout="fill" 
            objectFit="cover" 
            className={style.bentoImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;
