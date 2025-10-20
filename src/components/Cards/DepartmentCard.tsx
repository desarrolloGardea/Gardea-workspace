import '../../styles/card.css';
import '../../styles/department-card.css';

type Props = {
  name: string;
  description: string;
  leader: string;
  img: string;
};

const DepartmentCard = ({ name, description, leader, img }: Props) => {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={img} alt={name} />
      </div>
      <div className="brief">
        <h4>{name}</h4>
        <p>{description}</p>
        <p className="leader-text">Líder: {leader}</p>
      </div>
    </div>
  );
};

export default DepartmentCard;
