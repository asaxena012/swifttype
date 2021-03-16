import React from "react";
import DetailsCard from "../DetailsCard/DetailsCard";
import "./TypingChallenge.css";

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
      <div className="typer-container">HERE IS THE CHALLENGE</div>
    </div>
  );
};

export default TypingChallenge;
