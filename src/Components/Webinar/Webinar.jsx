import React from "react";
import HeaderArrow from "../HeaderArrow/HeaderArrow";
import "../Webinar/Webinar.css";
import webinarImg from "../../assets/images/webinarImg.png";
import webinarImg2 from "../../assets/images/webinarImg2.png";
import { Navigate } from "react-router-dom";

const Webinar = ({ webinar }) => {
  if (webinar === undefined) return <Navigate to="/" />;
  return (
    <div className="webinar">
      <div className="blur"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 pt-5">
            <HeaderArrow />
          </div>

          <div className="col-lg-5 col-md-5 col-5 webinar_div">
            <img
              className="webinar_img"
              src={webinar.img1}
              alt={webinar.desc2}
            />
            <div className="webinar_details">
              <h1>{webinar.heading2}</h1>
              <p>{webinar.desc2}</p>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-7">
            <div className="webinar_details2">
              <h1>{webinar.heading1}</h1>
              <p>{webinar.desc1}</p>
            </div>

            <div className="webinar_main_img_section">
              <img src={webinar.img2} alt="" />
              <h1>Webinar</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// Heading 2
export default Webinar;
