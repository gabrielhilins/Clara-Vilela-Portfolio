import Frame from '../Frame';
import AnimateInView from '../AnimateInView';
import style from './style.module.scss';
import Image from 'next/image';

const Hero = () => {
  return (
    <Frame>
      <AnimateInView>
        <section className={style.heroSection}>
        <div className={style.heroImagePlaceholder}>
          <Image src="/Sun 1.png" alt='Sol' width={120} height={120} />
        </div>
        <h1 className={style.title}>PORTFÓLIO</h1>
        <p className={style.subtitle}>Clara Vilela</p>
        <p className={style.yearText}>2026</p>
      </section>
      </AnimateInView>
    </Frame>
  );
};

export default Hero;
