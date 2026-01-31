"use client";

import Frame from "../Frame";
import AnimateInView from "../AnimateInView";
import style from "./style.module.scss";
import { IoArrowBack } from "react-icons/io5";
import DeveloperInfo from "./DeveloperInfo";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Frame>
      <AnimateInView>
        <footer className={style.footerSection}>
          <button onClick={scrollToTop} className={style.backToTopButton}>
            <IoArrowBack />
            Voltar ao início
          </button>

          <p className={style.thankYouText}>
            Obrigada por acompanhar meu trabalho!
          </p>
          <div className={style.bottom}>
            <p className={style.copyright}>
              © {new Date().getFullYear()} Clara Vilela. Todos os direitos
              reservados.
            </p>
            <DeveloperInfo />
          </div>
        </footer>
      </AnimateInView>
    </Frame>
  );
};

export default Footer;
