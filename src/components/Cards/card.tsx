import CAP_LOGO from '../../assets/2CAP_LOGO_.svg'
import '../../styles/card.css'

type Props = {
    title: string;
    description: string;
    imageBackgroundColor?: string;
}


const Card = ({ title, description, imageBackgroundColor }: Props) => {

    const imageContainerStyle = {
        backgroundColor: imageBackgroundColor
    };

    return (
        <div className="card-container">
            <div className="img-container" style={imageBackgroundColor ? imageContainerStyle : {}}>
                <img src={CAP_LOGO} alt="2CAP" />
            </div>
            <div className="brief">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card;