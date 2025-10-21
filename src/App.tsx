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
              <img src={MYNLovers} alt="@GarciaJared"/>
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
                <h3>Misión</h3>
                <p>Desarrollar y posicionar marcas de moda y deporte que conecten emocionalmente con las personas, a través de la creatividad, la autenticidad y el talento mexicano.</p>
              </div>
            </TwoColumns>
            <TwoColumns>
              <div className="cap-grid-text">
                <h3>Visión</h3>
                <p>Ser el grupo líder en Latinoamérica en creación y desarrollo de marcas de moda y deporte, reconocido por llevar la creatividad mexicana al mundo e influir en la cultura a través de historias poderosas que trascienden generaciones. </p>
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
        </Margin>
      </section>

    </>
  )
}


export default App