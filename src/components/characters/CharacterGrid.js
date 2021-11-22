import React from "react";
import CharacterCard from "./CharacterCard";
import "../../style/App.css";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((key) => (
        <CharacterCard item={key} />
      ))}
    </section>
  );
};

export default CharacterGrid;
