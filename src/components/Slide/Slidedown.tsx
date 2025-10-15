import ArrowDown from '../../assets/arrow-down.svg';
import GoDown from '../../assets/caps/go-down.svg';
import '../../styles/slidedown.css';
import IconSmButton from '../Buttons/icon-sm-button';

type Props = {
    nextSectionId?: string;
}

const SlideDown = ({ nextSectionId }: Props) => {

    const handleScroll = () => {
        if (nextSectionId) {
            document.getElementById(nextSectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="">
            {nextSectionId && (
                <div className="slide-down" onClick={handleScroll}>
                    <img src={GoDown} alt="go down" />
                    <IconSmButton
                        text="Ver más"
                        alt="Icono de fecha hacia abajo"
                        icon={ArrowDown}
                    />
                </div>
            )}
        </div>
    )
}

export default SlideDown;