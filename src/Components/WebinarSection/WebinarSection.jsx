import React from "react";
import WebinarCard from "../WebinarCard/WebinarCard";
import "./WebinarSection.css";
import webinarData from "../../Data/Webinar.json";
import { useNavigate } from "react-router-dom";

const WebinarSection = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black">
      <div className="webinar_heading_blur"></div>
      <div className="container home_webinar_section">
        <div className="home_webinar_heading">
          <h1>WEBINARS</h1>

          <div className="row">
            {webinarData.map((data) => (
              <div
                onClick={() => navigate(`/webinar/${data.route}`)}
                className="col-lg-6 mt-3 align_center"
              >
                <WebinarCard
                  image={data.img2}
                  heading1={data.heading1}
                  heading2={data.heading2}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebinarSection;
