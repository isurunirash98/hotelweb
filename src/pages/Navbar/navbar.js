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
          Home
        </a>
        <a href="/" className="navbar-item">
          Offers
        </a>
        <a href="/" className="navbar-item">
          Virtual Tours
        </a>
        <a href="/" className="navbar-item">
          Contact Us
        </a>
        <a href="/" className="navbar-item">
          About
        </a>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
