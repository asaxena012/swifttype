import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TestContainer.css";

const TestContainer = ({ characters, words, wpm }) => {
  // Conditional Rendering of test container (dummy)
  const timeRemaining = 30;

  return (
    <div className="test-container">
      {timeRemaining > 0 ? (
        <div className="TypingChallengeContainer">
          <TypingChallenge characters={characters} words={words} wpm={wpm} />
        </div>
      ) : (
        <div className="try-again-cont">
          <TryAgain words={10} characters={60} wpm={34} />
        </div>
      )}
    </div>
  );
};

export default TestContainer;
