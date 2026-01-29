import Frame from "../Frame";
import AnimateInView from "../AnimateInView";
import style from "./style.module.scss";
import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const About = () => {
  return (
    <Frame>
      <AnimateInView>
        <section className={style.aboutSection}>
          <h2 className={style.sectionTitle}>SOBRE MIM</h2>
          <div className={style.contentContainer}>
            <div className={style.imageContainer}>
              <Image
                src="/d173b57d-a7ff-4e4c-915c-8bd9d20bd218 3.png"
                alt="Clara Vilela"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <div className={style.textContainer}>
              <h3>Clara Vilela - Estudante de Arquitetura</h3>
              <p>
                Sou a Maria Clara Vilela, tenho 20 anos, sou natural de Garanhuns
                - PE. Atualmente estou cursando o 6º período de Arquitetura e
                Urbanismo na Universidade Federal da Paraíba e estagiando no
                escritório Regina Neri Arquitetura. Com essas experiências, pude
                expandir os conhecimentos sobre a minha área de formação, tais
                quais o uso de softwares variados, realização de projetos de
                arquitetura, interiores e urbanismo, bem como a participação em
                eventos de patrimônio histórico. Anseio em vivenciar a área
                urbanística profissionalmente e poder contribuir para a
                construção de espaços públicos. Além disso, me interesso
                progressivamente pela modelagem paramétrica, com o objetivo de
                aprofundar ainda mais os meus conhecimentos no software Revit.
              </p>
              <h4 className={style.contactTitle}>Contato</h4>
              <div className={style.contactButtons}>
                <a
                  href="https://instagram.com/_mariaklara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.contactButton}
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://wa.me/83998342290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={style.contactButton}
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:vilelaclara17@gmail.com"
                  className={style.contactButton}
                >
                  <IoMailOutline />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimateInView>
    </Frame>
  );
};

export default About;
