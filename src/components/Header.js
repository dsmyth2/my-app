import React from "react";
import logoImage from "../assets/grabby.jpg";

const Header = () => {
  return (
    <header className="header">
      <img src={logoImage} alt="" className="header-image" />
      <h2 className="header-title">Welcome to the Meme Generator App</h2>
      <h3 className="header-text">A dynamic app developed using React JS</h3>
    </header>
  );
};

export default Header;
