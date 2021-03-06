import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./ChallengeSection.css";

const ChallengeSection = ({
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
    <div className="challenge-section-container">
      <h1 data-aos="fade-down" className="challenge-section-heading">
        Type in to start the test!
      </h1>
      <TestContainer
        selectedPara={selectedPara}
        timeRemaining={timeRemaining}
        timerStarted={timerStarted}
        words={words}
        characters={characters}
        wpm={wpm}
        testInfo={testInfo}
        handleUserInput={handleUserInput}
        startAgain={startAgain}
      />
    </div>
  );
};

export default ChallengeSection;
