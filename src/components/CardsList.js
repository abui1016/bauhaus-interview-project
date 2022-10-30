import "../styles/CardsList.css";
import Card from "./Card";

const CardsList = ({ data, filter }) => {
  return (
    <div className="card-list">
      {data.map((item) => {
        if (item.category === filter || filter === "") {
          return (
            <Card
              key={item.title}
              image={item.image}
              description={item.description}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default CardsList;
