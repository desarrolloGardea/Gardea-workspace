import './App.css'
import Margin from './layout/margin'
import Navbar from './components/Navbar/Navbar'
import TwoColumns from './layout/2columns'
import Card from './components/Cards/card'
import FlatMdButton from './components/Buttons/flat-md-button'

import CAP2 from './assets/icons/2CAP_ICON.svg';
import PELOGO from './assets/icons/PE_LOGO.svg';
import GrupoGardeaW from './assets/icons/GRUPO_ICON_B.svg';
import GrupoGardeaB from './assets/icons/GRUPO_ICON_BL.svg';
import Cap2Logo from './assets/icons/cap2_logo.svg';
import W2Cap from './assets/icons/w_2cap.svg';

import Collage from './assets/big-collage.png'
import MYNLovers from './assets/myn.png'
import AmeCap from './assets/cap/198733132881_3.jpg'
import ACap from './assets/cap/197374108033-1.jpg'



function App() {

  return (
    <>
      <Navbar />
      <section id="section-1" className="section1 dark-bg">
        <Margin>
          <TwoColumns>
            <div className='img-banner'>
              <img src={MYNLovers} />
            </div>
            <div className="title-banner">
              <div className="title">
                <h2>Accede a tus <span>herramientas</span> de trabajo</h2>
                <h4>todo desde un mismo lugar</h4>
              </div>
              <a href="#section-3">Acceder</a>
            </div>
          </TwoColumns>
        </Margin>
      </section>
      <section className='collage-section'>
        <img src={Collage} />
      </section>

      <section id="section-2" className="light-bg">
        <Margin>
          <div className='cap-grid'>
            <TwoColumns>
              <img src={Cap2Logo} className="cap2-logo" />
              <div className='cap-grid-left'>
                <img src={AmeCap} alt="Vista lateral de gorra" />
              </div>
              <div className="cap-grid-text">
                <h3>Propósito</h3>
                <p style={{ fontSize: '28px' }}>
                  En Grupo Gardea creemos en el poder de las marcas para contar historias.
                  Creamos conceptos propios que despiertan pasión y autenticidad a través de la creatividad de nuestro Talento, y traemos a México marcas globales que inspiran a millones.
                </p>
              </div>
            </TwoColumns>
            <TwoColumns>
              <div className="cap-grid-text">
                <h3>Visión</h3>
                <p style={{ fontSize: '28px' }}>
                  Ser el grupo líder en Latinoamérica en creación y desarrollo de marcas de moda y deporte, reconocido por llevar la creatividad mexicana al mundo e influir en la cultura a través de historias poderosas que trascienden generaciones.
                </p>
                <h3>Misión</h3>
                <p style={{ fontSize: '28px' }}>
                  Desarrollar y posicionar marcas de moda y deporte que conecten emocionalmente con las personas, a través de la creatividad, la autenticidad y el talento mexicano.
                </p>
              </div>
              <div className='cap-grid-right'>
                <img src={ACap} alt="Vista lateral de gorra" />
              </div>
            </TwoColumns>
          </div>
        </Margin>
      </section>
      <section className='collage-section'>
        <img src={Collage} />
      </section>
      <section id="section-3" className="dark-bg">
        <Margin>
          <section className="toolbox-container">
            <div className="toolbox-title">
              <h4>Herramientas</h4>
            </div>
            <div className="cap-wrapper">
              <a href="https://gestiondepositos.2cap.com.mx/" target="_blank" rel="noopener noreferrer" className="card-link">
                <div className="card-cap-wrapper">
                  <Card
                    title="Gestión y validación de depósitos"
                    description=""
                    img={CAP2} />
                </div>
              </a>
              <a href="https://gestionventas.grupogardea.com/" target="_blank" rel="noopener noreferrer" className="card-link">
                <div className="card-cap-wrapper">
                  <Card
                    title="Generador de catálogos B2B"
                    description=""
                    img={GrupoGardeaB} />
                </div>
              </a>
              <a href="https://gestionrepartos.2cap.com.mx/" target="_blank" rel="noopener noreferrer" className="card-link">
                <div className="card-cap-wrapper">
                  <Card
                    title="Gestión de repartos a sucursales"
                    description=""
                    img={PELOGO} />
                </div>
              </a>
              <a href="http://98.85.105.110:3000/" target="_blank" rel="noopener noreferrer" className="card-link">
                <div className="card-cap-wrapper">
                  <Card
                    title="Integración 3PL"
                    description=""
                    img={GrupoGardeaW} />
                </div>
              </a>
            </div>
          </section>
        </Margin>
      </section>
    </>
  )
}


export default App
