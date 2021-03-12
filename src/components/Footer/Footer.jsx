import React from "react";
import "./Footer.css";
import linkedin from "./../../assets/icon-linkedin.svg";
import twitter from "./../../assets/icon-twitter.svg";
import github from "./../../assets/icon-github.svg";
import "./../../hover.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-text">
        Designed and developed by{" "}
        <a
          href="https://www.linkedin.com/in/adityasaxena012/"
          className="footer-link hvr-underline-from-left"
          target="_blank"
        >
          Aditya Saxena
        </a>
      </p>
      <div className="icons-container">
        <a
          href="https://www.linkedin.com/in/adityasaxena012/"
          target="_blank"
          className="hvr-grow-shadow"
        >
          <img src={linkedin} alt="" className="footer-icon" />
        </a>
        <a
          href="https://twitter.com/keenAadi"
          target="_blank"
          className="hvr-grow-shadow"
        >
          <img src={twitter} alt="" className="footer-icon" />
        </a>
        <a
          href="https://github.com/asaxena012"
          target="_blank"
          className="hvr-grow-shadow"
        >
          <img src={github} alt="" className="footer-icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
