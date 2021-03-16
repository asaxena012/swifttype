import React from "react";
import "./DetailsCard.css";

const DetailsCard = ({ cardName, cardValue }) => {
  return (
    <div className="card-container">
      <p className="card-name">{cardName}</p>
      <p className="card-value">{cardValue}</p>
    </div>
  );
};

export default DetailsCard;
