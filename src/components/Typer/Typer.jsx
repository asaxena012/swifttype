import React from "react";
import TestLetter from "../TestLetter/TestLetter";
import "./Typer.css";

const Typer = ({
  selectedPara,
  timeRemaining,
  timerStarted,
  testInfo,
  handleUserInput,
}) => {
  return (
    <div className="typer-container">
      {/* Timer */}
      <div className="timer">00:{String(timeRemaining).padStart(2, 0)}</div>
      <div className="timer-text">
        {!timerStarted && "Type here to start the timer"}
      </div>

      {/* Textareas */}
      <div className="textarea-container">
        <div className="textarea textarea-left">
          {testInfo.map((singleLetter) => (
            <TestLetter singleLetter={singleLetter} />
          ))}
        </div>
        <div className="textarea textarea-right">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="input-textarea"
            placeholder="Start typing here..."
            onChange={(e) => handleUserInput(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Typer;
