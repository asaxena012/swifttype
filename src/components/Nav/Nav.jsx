import React from "react";
import "./Nav.css";
import logo from "./../../assets/logo.svg";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img src={logo} alt="logo" className="logo-image" />
        <p className="nav-text">flashtype</p>
      </div>
      <div className="nav-right">
        <a href="mailto:adityasaxena@gmail.com" className="nav-secondary-link">
          email
        </a>
        <a
          href="https://www.linkedin.com/in/adityasaxena012/"
          target="_blank"
          className="nav-secondary-link"
        >
          linkedin
        </a>
        <a
          href="https://github.com/asaxena012"
          target="_blank"
          className="nav-primary-link"
        >
          github
        </a>
      </div>
    </div>
  );
};

export default Nav;
