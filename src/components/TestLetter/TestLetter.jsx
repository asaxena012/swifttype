import React from "react";
import "./TestLetter.css";

const TestLetter = ({ singleLetter }) => {
  //Set class according to letter status
  const statusClass = {
    notAttempted: "letter-not-attempted",
    correct: "letter-correct",
    incorrect: "letter-incorrect",
  }[singleLetter.testStatus];

  return <span className={statusClass}>{singleLetter.testLetter}</span>;
};

export default TestLetter;
