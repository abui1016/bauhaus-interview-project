import { useState, useEffect } from "react";
import CardsList from "./components/CardsList";
import Filter from "./components/Filter";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [data, setData] = useState([]);
  const categories = [""];

  // Fetch data
  useEffect(() => {
    const URL = "https://guileless-sopapillas-50e236.netlify.app/articles.json";
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const json = await response.json();
        setData(json);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get categories for filtering
  for (let i of data) {
    if (categories.includes(i.category)) continue;
    else categories.push(i.category);
  }

  // console.log(data);
  // console.log(categories);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <Filter setFilter={setFilter} categories={categories} />
      <CardsList data={data} filter={filter} />
    </div>
  );
}

export default App;
