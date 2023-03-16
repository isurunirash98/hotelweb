import React from "react";
import "./navbar.css";
import logo from "./logo.png";

function Navbar() {
  return (
    <div className="navbar">
      

      <div>
        <img className="logo" src={logo} alt="Logo" />
        <div className="items">
        <a href="/" className="navbar-item">
          HOME
        </a>
        <a href="/" className="navbar-item">
          OFFERS
        </a>
        <a href="/" className="navbar-item">
          VIRTUAL TOURS
        </a>
        <a href="/" className="navbar-item">
          CONTACT US
        </a>
        <a href="/" className="navbar-item">
          ABOUT
        </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
