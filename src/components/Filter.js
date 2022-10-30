import "../styles/Filter.css";

const Filter = ({ categories, setFilter }) => {
  return (
    <div className="filter-container">
      <label htmlFor="filter">Filter By: </label>
      <select
        name="filter"
        className="selector"
        defaultValue={categories[0]}
        onChange={(e) => setFilter(e.target.value)}
      >
        {categories.map((category) => {
          return (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
