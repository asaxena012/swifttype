import React from "react";
import DetailsCard from "../DetailsCard/DetailsCard";
import "./TypingChallenge.css";
import Typer from "./../Typer/Typer";

const TypingChallenge = ({
  selectedPara,
  timeRemaining,
  timerStarted,
  words,
  characters,
  wpm,
}) => {
  return (
    <div className="typing-challenge-container">
      {/* Details card * 3 */}
      <div className="details-card-container">
        <DetailsCard cardName="Words" cardValue={words} />
        <DetailsCard cardName="Characters" cardValue={characters} />
        <DetailsCard cardName="Speed" cardValue={wpm} />
      </div>

      {/* Typers */}
      <div className="typer-section-container">
        <Typer
          selectedPara={selectedPara}
          timeRemaining={timeRemaining}
          timerStarted={timerStarted}
        />
      </div>
    </div>
  );
};

export default TypingChallenge;
