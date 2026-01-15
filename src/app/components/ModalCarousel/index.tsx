"use client";

import React, { useState } from 'react';
import style from './style.module.scss';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface ModalCarouselProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const ModalCarousel: React.FC<ModalCarouselProps> = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      className={style.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <button className={`${style.navButton} ${style.closeButton}`} onClick={onClose}>
        <IoClose />
      </button>

      <button className={`${style.navButton} ${style.prevButton}`} onClick={handlePrev}>
        <IoChevronBack />
      </button>

      <div className={style.imageContainer}>
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className={style.imageWrapper}
          >
            <Image 
              src={images[currentIndex]} 
              alt={`Project image ${currentIndex + 1}`} 
              layout="fill" 
              objectFit="contain" 
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <button className={`${style.navButton} ${style.nextButton}`} onClick={handleNext}>
        <IoChevronForward />
      </button>
    </motion.div>
  );
};

export default ModalCarousel;
