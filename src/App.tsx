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
              <div className="card-cap-wrapper">
                <Card
                  title="Gestion de depositos"
                  description="Nuestra herramienta para gestionar los dépositos de nuestros colegas regionales."
                  img={CAP2} />
                <div className="button-on-border">
                  <FlatMdButton text="Entrar" url="https://gestiondepositos.2cap.com.mx/" />
                </div>
              </div>

              <div className="card-cap-wrapper">
                <Card
                  title="Gestion del sistema de ventas"
                  description="Nuestra herramienta para gestionar las ventas a nuestros clientes."
                  img={GrupoGardeaB} />
                <div className="button-on-border">
                  <FlatMdButton text="Entrar" url="https://gestionventas.grupogardea.com/" />
                </div>
              </div> <div className="card-cap-wrapper">
                <Card
                  title="Gestion del sistema de repartos"
                  description="Nuestra herramienta para gestionar repartos a sucursales."
                  img={PELOGO} />
                <div className="button-on-border">
                  <FlatMdButton text="Entrar" url="https://gestionrepartos.2cap.com.mx/" />
                </div>
              </div> <div className="card-cap-wrapper">
                <Card
                  title="Sistema de Shipedge"
                  description="Nuestra herramienta para gestionar los dépositos de nuestros colegas regionales."
                  img={GrupoGardeaW} />
                <div className="button-on-border">
                  <FlatMdButton text="Entrar" url="http://98.85.105.110:3000/" />
                </div>
              </div>
            </div>
          </section>
          <img src={W2Cap} className="w2cap-logo" />
          <SlideDown />
        </Margin>
      </section>

    </>
  )
}


export default App