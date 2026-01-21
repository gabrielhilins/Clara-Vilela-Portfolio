"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Zoom, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "./style.module.scss";

interface ModalCarouselProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const ModalCarousel: React.FC<ModalCarouselProps> = ({
  images,
  initialIndex,
  onClose,
}) => {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={style.overlay}>
      <button className={style.closeButton} onClick={onClose}>
        <IoClose />
      </button>

      {showHint && (
        <div className={style.swipeHint}>
          Arraste para o lado para ver mais fotos
        </div>
      )}

      <Swiper
        modules={[Zoom, Pagination, Navigation]}
        initialSlide={initialIndex}
        slidesPerView={1}
        centeredSlides
        loop
        zoom
        grabCursor
        pagination={{ clickable: true }}
        navigation={true}
        className={style.swiper}
        onTouchStart={() => setShowHint(false)} // some ao interagir
        onSlideChange={() => setShowHint(false)}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container">
              <Image
                src={img}
                alt={`Imagem do projeto ${index + 1}`}
                fill
                sizes="100vw"
                priority={index === initialIndex}
                style={{ objectFit: "contain" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ModalCarousel;
