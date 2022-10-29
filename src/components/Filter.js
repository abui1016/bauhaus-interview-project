const Filter = ({ categories, setFilter }) => {
  return (
    <div>
      <label for="filter">Choose a filter:</label>
      <select defaultValue="" onChange={(e) => setFilter(e.target.value)}>
        {categories.map((category) => {
          return <option value={category}>{category}</option>;
        })}
      </select>
    </div>
  );
};

export default Filter;
