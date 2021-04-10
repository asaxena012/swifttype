import React from "react";
import "./TryAgain.css";

const TryAgain = ({ words, characters, wpm, startAgain }) => {
  const sharerText = `I got a ${wpm} words per minute score on Swift Type.
  
  
  
  
  
  
  
  
  Give the test and share your score at swift-type.web.app
  `;

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
        <button onClick={startAgain} className="btn-retry">
          Retry
        </button>
        <button
          onClick={() => {
            window.open(
              `https://www.facebook.com/sharer/sharer.php?u=swift-type.web.app`,
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
              `https://twitter.com/intent/tweet?text=${sharerText}`,
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
