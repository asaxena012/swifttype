import React from "react";
import "./Landing.css";
import heroImage from "./../../assets/hero.svg";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-left">
        <h1 className="hero-text">Can you type...</h1>
        <p className="typewriter-text">quick?</p>
        {/* <p className="typewriter-text">fast?</p>
        <p className="typewriter-text">in speed?</p> */}
      </div>
      <div className="landing-right">
        <img
          className="hero-image"
          src={heroImage}
          alt="Image of a man running"
        />
      </div>
    </div>
  );
};

export default Landing;
