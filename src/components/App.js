import React, { useState, useEffect } from "react";
import "../style/App.css";
import Header from "./Headers";
import CharacterGrid from "./characters/CharacterGrid";
import Search from "./Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await fetch(
        "https://www.breakingbadapi.com/api/characters"
      ).then((response) => response.json());

      setItems(result);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  console.log(items);

  return (
    <div className="container">
      <Header />
      <Search />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
};

export default App;
