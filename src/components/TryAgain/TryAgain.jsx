import React from "react";
import "./TryAgain.css";

const TryAgain = ({ words, characters, wpm }) => {
  return (
    <div className="try-again-section">
      <h1 className="test-score-heading"> Test Scores</h1>
      <p className="scores">
        Characters: <b>{characters}</b>
      </p>
      <p className="scores">
        Words: <b>{words}</b>
      </p>
      <p className="scores">
        Speed: <b>{wpm} wpm</b>
      </p>
      <div className="icon-container">
        <button className="btn-retry">Retry</button>
        <button className="btn-share">Share</button>
        <button className="btn-tweet">Tweet</button>
      </div>
    </div>
  );
};

export default TryAgain;
