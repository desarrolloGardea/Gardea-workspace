import '../../styles/buttons.css'

type Props = {
    text: string;
    alt: string;
    icon: string;
}

const IconSmButton = ({text, alt, icon}: Props) => {
    return (
        <div className="icon-sm-button-container">
            <button className="icon-sm-button" >
                {text}
                <img src={icon} alt={alt} />
            </button>
        </div>
    )
}

export default IconSmButton; 