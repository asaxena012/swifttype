import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import "./ChallengeSection.css";

const ChallengeSection = () => {
  return (
    <div className="challenge-section-container">
      <h1 data-aos="fade-down" className="challenge-section-heading">
        Type in to start the test!
      </h1>
      <div className="try-again-container">
        <TryAgain words={10} characters={60} wpm={34} />
      </div>
    </div>
  );
};

export default ChallengeSection;
