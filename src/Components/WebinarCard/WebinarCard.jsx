import React from "react";
import "../WebinarCard/WebinarCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholder from '../../assets/images/placeholder.jpg'

const WebinarCard = ({ image, heading1, heading2 }) => {

  
  return (
    <div className="webinar_card">
      <div className="webinar_card_section">
        <div>
          <div className="webinar_card_gradient"></div>
          <img src={image} alt="" />
          {/* <LazyLoadImage effect="blur" placeholderSrc={placeholder} src={image} alt="webinar Image" /> */}
        </div>
        <h1>{heading1}</h1>
        <h2>{heading2}</h2>
      </div>
    </div>
  );
};

export default WebinarCard;
