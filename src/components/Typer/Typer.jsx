import React from "react";
import "./Typer.css";

const Typer = ({ selectedPara, timeRemaining, timerStarted }) => {
  return (
    <div className="typer-container">
      {/* Timer */}
      <div className="timer">00:{String(timeRemaining).padStart(2, 0)}</div>
      <div className="timer-text">
        {!timerStarted && "Type here to start the timer"}
      </div>

      {/* Textareas */}
      <div className="textarea-container">
        <div className="textarea textarea-left">{selectedPara}</div>
        <div className="textarea textarea-right">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="input-textarea"
            placeholder="Start typing here..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Typer;
