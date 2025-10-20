import './App.css'
import Margin from './layout/margin'
import Navbar from './components/Navbar/Navbar'
import TwoColumns from './layout/2columns'
import SlideDown from './components/Slide/Slidedown'
import Card from './components/Cards/card'
import FlatMdButton from './components/Buttons/flat-md-button'

import CAP2 from './assets/icons/2CAP_ICON.svg';
import PELOGO from './assets/icons/PE_LOGO.svg';
import GrupoGardeaW from './assets/icons/GRUPO_ICON_B.svg';
import GrupoGardeaB from './assets/icons/GRUPO_ICON_BL.svg';

import CachuchasBanner from './assets/caps/cachuchas-banner.svg'
import CapRight2 from './assets/caps/cap-right2.svg'
import CapBack from './assets/caps/cap-back.svg'
import AmeCap from './assets/cap/198733132881_3.jpg'
import ACap from './assets/cap/197374108033-1.jpg'
import CapBelt from './assets/caps/cap-belt.svg'


function App() {

  return (
    <>
      <Navbar />
      <section id="section-1">
        <Margin>
          <TwoColumns>
            <div>
              <img src={CachuchasBanner} />
            </div>
            <div className="title-banner">
              <div className="title">
                <h2>Accede a tus <span>herramientas</span> de trabajo</h2>
                <h4>todo desde un mismo lugar</h4>
              </div>
              <a href="#section-3">Acceder</a>
            </div>
          </TwoColumns>

          <SlideDown nextSectionId="section-2" />
        </Margin>
      </section>

      <section id="section-2">
        <Margin>
          <div className='cap-grid'>
            <TwoColumns>
              <div className='cap-grid-left'>
                <img src={AmeCap} alt="Vista lateral de gorra" />
              </div>
              <div className="cap-grid-text">
                <h3>Nuestra Historia</h3>
                <p>Todo comenzó en calle Morelos, Monterrey, Nuevo León con nuestra primera tienda el
                  1 de mayo de 1996. De una visión familiar emerge la pasión de vestir a México con las
                  mejores marcas de gorras. Hoy contamos con más de 60 tiendas a nivel nacional y
                  llevamos nuestro legado y estilo a LATAM con nuestras primeras tiendas en Chile.</p>
              </div>
            </TwoColumns>
            <TwoColumns>
              <div className="cap-grid-text">
                <h3>¿Quienes somos?</h3>
                <p>hacemos honor a la gorra, cachucha, jockey, cap o cómo tu la
                  conozcas. Creemos en la autenticidad, el valor y el feeling que te genera al
                  colocarla sobre tu cabeza y completar tu look. Te traemos las mejores marcas
                  dentro y fuera del juego, tu eliges la jugada. </p>
              </div>
              <div className='cap-grid-right'>
                <img src={ACap} alt="Vista lateral de gorra" />
              </div>
            </TwoColumns>
          </div>

        </Margin>
      </section>
      <section id="section-3">
        <Margin>
          <section className="toolbox-container">
            <div className="toolbox-title">
              <img src={CapBelt} alt="Icono de flecha hacia adelante" />
              <h4>Herramientas</h4>
            </div>
            <div className="cap-wrapper-background-container">
              <img src={CapBack} className="background-cap-left" />
              <img src={CapRight2} className="background-cap-right" />

            </div>  <div className="cap-wrapper">
              <div className="card-cap-wrapper">
                <Card
                  title="Gestion de depositos"
                  description="Nuestra herramienta para gestionar los dépositos de nuestros colegas regionales."
                  img={CAP2} />
                <div className="button-on-border">
                  <FlatMdButton text="Ir" url="https://gestiondepositos.2cap.com.mx/" />
                </div>
              </div>

              <div className="card-cap-wrapper">
                <Card
                  title="Gestion del sistema de ventas"
                  description="Nuestra herramienta para gestionar las ventas a nuestros clientes."
                  img={GrupoGardeaB} />
                <div className="button-on-border">
                  <FlatMdButton text="Ir" url="https://gestionventas.grupogardea.com/" />
                </div>
              </div> <div className="card-cap-wrapper">
                <Card
                  title="Gestion del sistema de repartos"
                  description="Nuestra herramienta para gestionar repartos a sucursales."
                  img={PELOGO} />
                <div className="button-on-border">
                  <FlatMdButton text="Ir" url="https://gestionrepartos.2cap.com.mx/" />
                </div>
              </div> <div className="card-cap-wrapper">
                <Card
                  title="Sistema de Shipedge"
                  description="Nuestra herramienta para gestionar los dépositos de nuestros colegas regionales."
                  img={GrupoGardeaW} />
                <div className="button-on-border">
                  <FlatMdButton text="Ir" url="http://98.85.105.110:3000/" />
                </div>
              </div>
            </div>
          </section>
          <SlideDown />
        </Margin>
      </section>

    </>
  )
}


export default App