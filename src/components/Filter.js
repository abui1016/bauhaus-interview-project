const Filter = ({ categories, setFilter }) => {
  return (
    <div>
      <label for="filter">Choose a filter:</label>
      <select
        defaultValue={categories[0]}
        onChange={(e) => setFilter(e.target.value)}
      >
        {categories.map((category) => {
          return (
            <option value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Filter;
