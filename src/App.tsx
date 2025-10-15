import './App.css'
import Margin from './layout/margin'
import Navbar from './components/Navbar/Navbar'
import TwoColumns from './layout/2columns'
import SlideDown from './components/Slide/Slidedown'
import Card from './components/Cards/card'
import FlatMdButton from './components/Buttons/flat-md-button'



import CachuchasBanner from './assets/caps/cachuchas-banner.svg'
import CapRight from './assets/caps/cap-right.svg'
import CapLeft from './assets/caps/cap-left.svg'
import CapTop from './assets/caps/cap-up.svg'
import CapFront from './assets/caps/cap-front.svg'
import CapBelt from './assets/caps/cap-belt.svg'




function App() {

  return (
    <>
      <Navbar />
      <section id="section-1">
        <Margin>
          <TwoColumns>
            <img src={CachuchasBanner} />
            <div className="title-banner">
              <div className="title">
                <h2>Accede a tus <span>herramientas</span> de trabajo</h2>
                <h4>todo desde un mismo lugar</h4>
              </div>
              <button>Acceder</button>
            </div>
          </TwoColumns>
          <SlideDown nextSectionId="section-2" />
        </Margin>
      </section>
      <section id="section-2">
        <section className="caps-against">
          <div className="cap-left-container">
            <img src={CapLeft} alt="Icono de flecha hacia la izquierda" />
            <h4>Recuerda que juntos hacemos la fuerza.</h4>
          </div>

          <div className="cap-right-container">
            <h4>Trabajo en equipo.</h4>
            <img src={CapRight} alt="Icono de flecha hacia la derecha" />
          </div>
        </section>
        <Margin>
          <div className="mision-establishment">
            <h4>Misión</h4>
            <p>Somos una empresa fundada en  la ciudad de Chihuahua, con el propósito de desarrollar distintos  canales de negocio buscando con pasión las tendencias de moda y  deporte que impulsen el crecimiento de nuestros colaboradores
            </p>
          </div>
          <SlideDown nextSectionId="section-3" />
        </Margin>
      </section>
      <section id="section-3">
        <Margin>
          <section className="cap-bluecaps-container">
            <div className="cap-top">
              <h4>Comprometidos con la excelencia.</h4>
              <img src={CapTop} alt="Icono de flecha hacia arriba" />
            </div>
            <div className="cap-front">
              <img src={CapFront} alt="Icono de flecha hacia adelante" />
              <div className="vision-establishment">
                <h4>Visión</h4>
                <p>Somos una empresa fundada en  la ciudad de Chihuahua, con el propósito de desarrollar distintos  canales de negocio buscando con pasión las tendencias de moda y  deporte que impulsen el crecimiento de nuestros colaboradores
                </p>
              </div>
            </div>
          </section>
          <SlideDown nextSectionId="section-4" />
        </Margin>
      </section>
      <section id="section-4">
        <Margin>
          <section className="toolbox-container">
            <div className="toolbox-title">
              <img src={CapBelt} alt="Icono de flecha hacia adelante" />
              <h4>Herramientas</h4>
            </div>
            <div className="cap-wrapper">
              <div className="card-cap-wrapper">
                <Card
                  title="Gestion de depositos"
                  description="Accede a la gestion de depositos" />
                <div className="button-on-border">
                  <FlatMdButton text="Ir" url="#" />
                </div>
              </div>
              <div className="card-cap-wrapper">
                <Card
                  title="Gestion de depositos"
                  description="Accede a la gestion de depositos" />
                <div className="button-on-border">
                  <FlatMdButton text="Ir" url="#" />
                </div>
              </div>
              <div className="card-cap-wrapper">
                <Card
                  title="Gestion de depositos"
                  description="Accede a la gestion de depositos" />
                <div className="button-on-border">
                  <FlatMdButton text="Ir" url="#" />
                </div>
              </div>
              <div className="card-cap-wrapper">
                <Card
                  title="Gestion de depositos"
                  description="Accede a la gestion de depositos" />
                <div className="btn-w button-on-border">
                  <FlatMdButton text="Ir" url="#" />
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
