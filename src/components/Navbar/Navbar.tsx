import '../../styles/navbar.css'
import LOGO from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="bss-name">
          <img src={ LOGO } alt="Grupo Gardea" />
        </div>
        <ul>
          <li><a href="#section-1">Inicio</a></li>
          <li><a href="#section-2">Nosotros</a></li>
          <li><a href="#section-3">Tus herramientas</a></li>
          
        </ul>
    </nav>
  )
}

export default Navbar
