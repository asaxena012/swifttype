import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import TryAgain from "../TryAgain/TryAgain";
import "./ChallengeSection.css";

const ChallengeSection = () => {
  return (
    <div className="challenge-section-container">
      <h1 data-aos="fade-down" className="challenge-section-heading">
        Type in to start the test!
      </h1>
      <TestContainer />
    </div>
  );
};

export default ChallengeSection;
