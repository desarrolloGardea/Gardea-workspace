import { useEffect } from 'react';
import '../../styles/navbar.css';
import LOGO from '../../assets/logo.png';

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      const sections = document.querySelectorAll('section');

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          if (section.classList.contains('dark-bg')) {
            navbar?.classList.remove('dark-theme');
          } else if (section.classList.contains('light-bg')) {
            navbar?.classList.add('dark-theme');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="bss-name">
        <img src={LOGO} alt="Grupo Gardea" />
      </div>
      <ul>
        <li><a href="#section-1">Inicio</a></li>
        <li><a href="#section-2">Nosotros</a></li>
        <li><a href="#section-3">Tus herramientas</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

