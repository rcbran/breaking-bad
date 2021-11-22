import React, { useState } from "react";
import "../style/App.css";

const Search = () => {
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters"
        ></input>
      </form>
    </section>
  );
};

export default Search;
