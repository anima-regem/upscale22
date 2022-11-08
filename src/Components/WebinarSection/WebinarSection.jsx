import React from "react";
import WebinarCard from "../WebinarCard/WebinarCard";
import "../WebinarSection/WebinarSection.css";

const WebinarSection = () => {
  return (
    <div className="bg-black">
      <div className="webinar_heading_blur"></div>
      <div className="container home_webinar_section">
        <div className="home_webinar_heading">
          <h1>WEBINARS</h1>
          <div className="webinar_home_card_section">
            <div>
              <WebinarCard />
            </div>
            <div>
              <WebinarCard />
            </div>
            <div>
              <WebinarCard />
            </div>
            <div>
              <WebinarCard />
            </div>
            <div>
              <WebinarCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarSection;
