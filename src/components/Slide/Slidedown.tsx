import GoDown from '../../assets/caps/go-down.svg'
import ArrowDown from '../../assets/arrow-down.svg'
import IconSmButton from '../Buttons/icon-sm-button'
import '../../styles/slidedown.css'



const SlideDown = () => {
    return (
        <section className="slide-down"><img src={GoDown} />
            <div className="slide-down-button-container">
                <IconSmButton
                text="Ver más"
                alt="Icono de fecha hacia abajo"
                icon={ArrowDown}
                />
            </div>
        </section>

    )
}

export default SlideDown