import React from "react";
import TryAgain from "../TryAgain/TryAgain";
import "./TestContainer.css";

const TestContainer = () => {
  return (
    <div className="test-container">
      <TryAgain words={10} characters={60} wpm={34} />
    </div>
  );
};

export default TestContainer;
