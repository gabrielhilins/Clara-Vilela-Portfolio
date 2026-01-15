"use client";

import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import style from './style.module.scss';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: React.ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const panel = panelRef.current;

    if (!container || !panel) return;

    
    const ctx = gsap.context(() => {
      
      gsap.to(panel, {
        x: () => -(panel.scrollWidth - container.offsetWidth),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => "+=" + (panel.scrollWidth - container.offsetWidth),
          invalidateOnRefresh: true, 
        },
      });
    }, container); 

    return () => ctx.revert(); 
  }, []);

  return (
    <div ref={containerRef} className={style.scrollContainer}>
      <div ref={panelRef} className={style.scrollPanel}>
        {React.Children.map(children, (child) => (
          <div className="panel">{child}</div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
