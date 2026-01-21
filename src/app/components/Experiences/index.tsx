'use client'

import Frame from '../Frame';
import { useState, useRef, useEffect, useCallback } from 'react';
import AnimateInView from '../AnimateInView';
import style from './style.module.scss';
import Image from 'next/image';
import { gsap } from 'gsap';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { experiencesData } from '../../data/experiences'; 

const Experiences = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const experiencesContainerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null); 
  const itemsPerPage = 2;
  const totalPages = Math.ceil(experiencesData.length / itemsPerPage);

  const transitionToPage = useCallback((pageIndex: number) => {
    gsap.to(experiencesContainerRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setCurrentPage(pageIndex);
        gsap.to(experiencesContainerRef.current, { opacity: 1, duration: 0.5, delay: 0.1 });
      },
    });
  }, [experiencesContainerRef, setCurrentPage]);

  const startAutoScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentPage(prevPage => (prevPage + 1) % totalPages);
    }, 10000);
  }, [setCurrentPage, totalPages]);

  const handleNext = useCallback(() => {
    const nextPage = (currentPage + 1) % totalPages;
    transitionToPage(nextPage);
    startAutoScroll(); // Reset interval on manual interaction
  }, [currentPage, totalPages, transitionToPage, startAutoScroll]);

  const handlePrev = useCallback(() => {
    const prevPage = (currentPage - 1 + totalPages) % totalPages;
    transitionToPage(prevPage);
    startAutoScroll(); // Reset interval on manual interaction
  }, [currentPage, totalPages, transitionToPage, startAutoScroll]);

  useEffect(() => {
    if (totalPages > 1) {
      startAutoScroll();
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [totalPages, startAutoScroll]); 

  const startIndex = currentPage * itemsPerPage;
  const currentExperiences = experiencesData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Frame>
      <AnimateInView>
        <section className={style.experiencesSection}>



        <h2 className={style.sectionTitle}>EXPERIÊNCIAS</h2>



        



        <div ref={experiencesContainerRef} className={style.experiencesList}>



          {currentExperiences.map((exp) => (



            <div key={exp.id} className={style.experienceItem}>



              <div className={style.imageContainer}>



                <Image src={exp.imageUrl} alt={exp.title} layout="fill" objectFit="contain" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />



              </div>



              <div className={style.textContainer}>



                <h3>{exp.title}</h3>



                <hr className={style.titleHr} />



                <p>{exp.description}</p>



                <span className={style.timeRange}>{exp.timeRange}</span>



              </div>



            </div>



          ))}



        </div>







        <div className={style.navigation}>



          <button onClick={handlePrev} disabled={totalPages <= 1} aria-label="Previous Experience">



            <IoIosArrowBack />



          </button>



          <button onClick={() => handleNext()} disabled={totalPages <= 1} aria-label="Next Experience">



            <IoIosArrowForward />



          </button>



                </div>



        



        



        



              </section>



              </AnimateInView>



        



        



            </Frame>



        



        



        



          );



        



        



        



        };







export default Experiences;
