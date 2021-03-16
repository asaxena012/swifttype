import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import TryAgain from "../TryAgain/TryAgain";
import "./ChallengeSection.css";

const ChallengeSection = ({ characters, words, wpm }) => {
  return (
    <div className="challenge-section-container">
      <h1 data-aos="fade-down" className="challenge-section-heading">
        Type in to start the test!
      </h1>
      <TestContainer characters={characters} words={words} wpm={wpm} />
    </div>
  );
};

export default ChallengeSection;
