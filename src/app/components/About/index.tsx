import Frame from '../Frame';
import AnimateInView from '../AnimateInView';
import style from './style.module.scss';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

const About = () => {
  return (
    <Frame>
      <AnimateInView>
        <section className={style.aboutSection}>
        <h2 className={style.sectionTitle}>SOBRE MIM</h2>
        <div className={style.contentContainer}>
          <div className={style.imageContainer}>
            <Image 
              src="/IMG_8881.jpg" 
              alt="Clara Vilela" 
              layout="fill" 
              objectFit="cover" 
            />
          </div>
          <div className={style.textContainer}>
            <h3>Um pouco sobre mim</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
            </p>
            <h4 className={style.contactTitle}>Contato</h4>
            <div className={style.contactButtons}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={style.contactButton}>
                <FaInstagram />
                <span>Instagram</span>
              </a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className={style.contactButton}>
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:example@example.com" className={style.contactButton}>
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
