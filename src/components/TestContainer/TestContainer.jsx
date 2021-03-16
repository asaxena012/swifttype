import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TestContainer.css";

const TestContainer = ({ characters, words, wpm }) => {
  return (
    <div className="test-container">
      <div data-aos="fade-up" className="TypingChallengeContainer">
        <TypingChallenge characters={characters} words={words} wpm={wpm} />
      </div>

      {/* <div className="try-again-cont">
        <TryAgain words={10} characters={60} wpm={34} />
      </div> */}
    </div>
  );
};

export default TestContainer;
