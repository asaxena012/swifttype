import React from "react";
import DetailsCard from "../DetailsCard/DetailsCard";
import "./TypingChallenge.css";
import Typer from "./../Typer/Typer";

const TypingChallenge = ({ characters, words, wpm }) => {
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
        <Typer selectedPara="You have to type this exact text in the typing area" />
      </div>
    </div>
  );
};

export default TypingChallenge;
