import React from "react";
import "../WebinarCard/WebinarCard.css";

const WebinarCard = ({ image, heading1, heading2 }) => {
  return (
    <div className="webinar_card">
      <div className="webinar_card_section">
        <img src={image} alt="webinar Image" />
        <h1>{heading1}</h1>
        <h2>{heading2}</h2>
      </div>
    </div>
  );
};

export default WebinarCard;
