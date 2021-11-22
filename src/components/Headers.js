import React from "react";
import "../style/App.css";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <header className="center">
      <img src={logo} alt="breaking bad logo"></img>
    </header>
  );
};

export default Header;
