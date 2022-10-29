const Card = ({ image, description }) => {
  return (
    <div>
      <div>
        <img src={image} alt="" />
        {description}
      </div>
    </div>
  );
};

export default Card;
