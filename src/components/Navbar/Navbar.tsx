import TwoColumns from '../../layout/2columns'
import '../../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">

      <TwoColumns>
        <div className="main-name">
          <h1>Grupo Gardea</h1>
        </div>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Tus herramientas</a></li>
          <li><a href="#">Departamentos</a></li>
        </ul>
      </TwoColumns>



    </nav>
  )
}

export default Navbar
