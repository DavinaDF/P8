import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Logo Kasa" />
      <ul className="menu"></ul>
      <li>Accueil</li>
      <li>A propos</li>
    </div>
    // <div>
    //   <h1>Kasa</h1>
    // </div>
  );
};

export default Header;
