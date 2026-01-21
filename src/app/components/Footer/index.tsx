'use client'

import Frame from '../Frame';
import AnimateInView from '../AnimateInView';
import style from './style.module.scss';
import { IoArrowBack } from 'react-icons/io5'; 
import DeveloperInfo from '../DeveloperInfo';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <Frame>
      <AnimateInView>
        <footer className={style.footerSection}>
          <button onClick={scrollToTop} className={style.backToTopButton}>
            <IoArrowBack /> Voltar para o início
          </button>
          <p className={style.thankYouText}>Obrigada por ter parado para olhar meu trabalho!</p>
          <p>© {new Date().getFullYear()} Clara Vilela. Todos os direitos Reservados.</p>
          <DeveloperInfo />
        </footer>
      </AnimateInView>
    </Frame>
  );
};

export default Footer;
