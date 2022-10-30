import "../styles/Card.css";

const Card = ({ image, description }) => {
  return (
    <div className="card">
      <div className="content">
        <img className="image" src={image} alt="" />
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default Card;
