import React from "react";

function navbar() {
  return (
    <div className="parent-navbar-container">
      <nav className="navbar-menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>Services</li>
          <li>About Us</li>
          <li>Sale Events</li>
        </ul>
      </nav>
    </div>
  );
}

export default navbar;
