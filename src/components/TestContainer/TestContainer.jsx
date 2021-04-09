import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TestContainer.css";

const TestContainer = ({
  selectedPara,
  timeRemaining,
  timerStarted,
  words,
  characters,
  wpm,
  testInfo,
  handleUserInput,
  startAgain,
}) => {
  return (
    <div className="test-container">
      {timeRemaining > 0 ? (
        <div className="TypingChallengeContainer">
          <TypingChallenge
            selectedPara={selectedPara}
            timeRemaining={timeRemaining}
            timerStarted={timerStarted}
            words={words}
            characters={characters}
            wpm={wpm}
            testInfo={testInfo}
            handleUserInput={handleUserInput}
          />
        </div>
      ) : (
        <div className="try-again-cont">
          <TryAgain
            words={words}
            characters={characters}
            wpm={wpm}
            startAgain={startAgain}
          />
        </div>
      )}
    </div>
  );
};

export default TestContainer;
