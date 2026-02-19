import Frame from '../components/Frame';
import AnimateInView from '../components/AnimateInView';
import { linksData } from '../data/links'; 
import style from './style.module.scss'
import Image
 from 'next/image';
import { ReactElement } from 'react';
import DeveloperInfo from '../components/Footer/DeveloperInfo';

const MainLinks = () => {
  const renderIcon = (icon: string | ReactElement) => { 
    if (typeof icon === 'string') {
        return <Image src={icon} alt="Link icon" className={style.linkImage} width={24} height={24} />;
    }
    return icon;
  };

  return (
    <Frame forceLight={true}>
      <AnimateInView>
        <div className={style.contentWrapper}>
          <div className={style.linksContent}>
          <header className={style.linksHeader}>
            <div className={style.profileImage}>
              <Image src="/IMG_8881.jpg" alt="Agência DANN Monograma" width={120} height={120} />
            </div>
            <h1>Clara Vilela</h1>
            <p>Estudante de Arquitetura</p>
          </header>

          <nav className={style.linksList}>
            {linksData.map((link) => (
              <a
                key={link.id}
                href={link.url}
                className={`${style.linkItem} ${link.highlight ? style.highlight : ""}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.title}
              >
                <span className={style.linkIcon}>{renderIcon(link.icon)}</span>
                <span className={style.linkTitle}>{link.title}</span>
              </a>
            ))}
          </nav>
          
          <div className={style.linksFooter}>
            <p>© {new Date().getFullYear()} Clara Vilela. Todos os direitos reservados.</p>
          </div>
        </div>
        <DeveloperInfo forceLight={true} />
      </div>
      </AnimateInView>
    </Frame>
  );
};

export default MainLinks;