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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
                nec, ultricies sed, dolor. Cras elementum ultrices diam.
                Maecenas ligula massa, varius a, semper congue, euismod non, mi.
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
