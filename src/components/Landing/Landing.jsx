import React from "react";
import "./Landing.css";
import heroImage from "./../../assets/hero.svg";
import Typewriter from "typewriter-effect";

const Landing = () => {
  return (
    <div className="landing-container">
      <div data-aos="fade-right" className="landing-left">
        <h1 className="hero-text">Can you type...</h1>
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: ["quick?", "correct?", "in speed?"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        {/* <p className="typewriter-text">quick?</p> */}
        {/* <p className="typewriter-text">fast?</p>
        <p className="typewriter-text">in speed?</p> */}
      </div>
      <div className="landing-right">
        <img
          className="hero-image"
          src={heroImage}
          alt="Image of a man running"
          data-aos="fade-left"
        />
      </div>
    </div>
  );
};

export default Landing;
