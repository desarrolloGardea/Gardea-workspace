import Margin from './layout/margin'
import Navbar from './components/Navbar/Navbar'
import CachuchasBanner from './assets/caps/cachuchas-banner.svg'

import './App.css'
import TwoColumns from './layout/2columns'
import SlideDown from './components/Slide/Slidedown'

function App() {

  return (
    <>
      <Navbar />
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
        <SlideDown />
      </Margin>
    </>
  )
}

export default App