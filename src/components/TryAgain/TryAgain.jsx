import React from "react";
import "./TryAgain.css";

const TryAgain = ({ words, characters, wpm }) => {
  return (
    <div className="try-again-container">
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
        <button
          onClick={() => {
            window.open(
              "https://www.facebook.com/sharer/sharer.php?u=asaxena012.github.io/nameit",
              "facebook-share-dialog",
              "width= 800, height= 600"
            );
          }}
          className="btn-share"
        >
          Share
        </button>
        <button
          onClick={() => {
            window.open(
              "https://twitter.com/intent/tweet?text=asaxena012.github.io/nameit",
              "Twitter",
              "width= 800, height= 600"
            );
          }}
          className="btn-tweet"
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TryAgain;
