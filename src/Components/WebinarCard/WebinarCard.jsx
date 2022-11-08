import React from "react";
import "../WebinarCard/WebinarCard.css";
import webinarImg from "../../assets/images/webinarImg2.png";

const WebinarCard = ({ image, heading1, heading2 }) => {
  return (
    <div className="webinar_card">
      <div className="webinar_card_section">
        <img src={webinarImg} alt="webinar Image" />
        <h1>How to pitch an idea?</h1>
        <h2>Heading 4</h2>
      </div>
    </div>
  );
};

export default WebinarCard;
