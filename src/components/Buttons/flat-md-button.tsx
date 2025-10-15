import '../../styles/buttons.css'

type Props = {
    text: string;
    event?: () => void; 
    url?: string;
}

const FlatMdButton = ({ text, event, url }: Props) => {

    const handleClick = () => {
        if (url) {
            window.open(url, '_blank');
        } else if (event) {
            event();
        }
    }

    return (
        <div className="flat-md-button-container">
            <button className="flat-md-button" onClick={handleClick} >
                {text}
            </button>
        </div>
    )
}

export default FlatMdButton; 