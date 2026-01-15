import { FaGlobeAmericas, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';

export const linksData = [
  {
    id: 1,
    title: "Meu Portfólio",
    url: "/",
    icon: <FaGlobeAmericas />,
    highlight: true,
  },
  {
    id: 2,
    title: "Meu Instagram",
    url: "/",
    icon: <FaInstagram/>,
  },
  {
    id: 3,
    title: "Instagram - Arte & Kids",
    url: "https://www.instagram.com/artes.e.kids/",
    icon: <FaInstagram />,
  }, 
  {
    id: 4,
    title: "Whatsapp",
    url: "https://wa.me/+5511999999999", 
    icon: <FaWhatsapp />,
  },
  {
    id: 5,
    title: "Email",
    url: "mailto:clara.vilela@example.com", 
    icon: <IoMailOutline/>,
  },
];
