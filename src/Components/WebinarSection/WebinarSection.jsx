import React from "react";
import WebinarCard from "../WebinarCard/WebinarCard";
import "./WebinarSection.css";
import webinarData from "../../json/webinar_data.json";
import { useContext } from "react";
import { WebinarContext } from "../../context/WebinarContext";
import { NavLink, useNavigate } from "react-router-dom";

const webinarData1 = webinarData.slice(0, 3);
const webinarData2 = webinarData.slice(3, 5);

const WebinarSection = () => {
  const navigate = useNavigate();

  const { webinarData, setWebinarData } = useContext(WebinarContext);
  console.log(webinarData);
  return (
    <div className="bg-black">
      <div className="webinar_heading_blur"></div>
      <div className="container home_webinar_section">
        <div className="home_webinar_heading">
          <h1>WEBINARS</h1>
          {/* <div className="row">
            {webinarData1.map((data, index) => (
              <div
                onClick={() => {
                  setWebinarData(data);
                  navigate(`/webinar/${data.route}`);
                  console.log(webinarData);
                }}
                className="col-lg-4 mt-3"
              >
                <WebinarCard
                  key={index}
                  image={data.mainImg}
                  heading1={data.heading1}
                  heading2={data.heading4}
                />
              </div>
            ))}
            {webinarData2.map((data, index) => (
              <div
                onClick={() => {
                  setWebinarData(data);
                  navigate(`/webinar/${data.route}`);
                  console.log(webinarData);
                }}
                className={
                  data.rightAlign
                    ? "col-lg-6 mt-3 right_align"
                    : "col-lg-6 mt-3"
                }
              >
                <WebinarCard
                  key={index}
                  image={data.mainImg}
                  heading1={data.heading1}
                  heading2={data.heading4}
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WebinarSection;
