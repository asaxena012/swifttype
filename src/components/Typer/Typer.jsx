import React from "react";
import "./Typer.css";

const Typer = ({ selectedPara }) => {
  return (
    <div className="typer-container">
      {/* Timer */}
      <div className="timer">00:60</div>
      <div className="timer-text">Timer starts at typing</div>
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
