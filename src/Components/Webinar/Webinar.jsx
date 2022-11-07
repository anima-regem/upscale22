import React from "react";
import HeaderArrow from "../HeaderArrow/HeaderArrow";
import "../Webinar/Webinar.css";
import webinarImg from "../../assets/images/webinarImg.png";
import webinarImg2 from "../../assets/images/webinarImg2.png";

const Webinar = () => {
  return (
    <div className="webinar">
      <div className="blur"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 pt-5">
            <HeaderArrow />
          </div>

          <div className="col-lg-5 col-md-5 col-5 webinar_div">
            <img className="webinar_img" src={webinarImg} alt="" />
            <div className="webinar_details">
              <h1>Heading 2</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-7">
            <div className="webinar_details2">
              <h1>How to pitch an idea?</h1>
              <p>
                Fascinated to solve real-life problems? Do you find it hard to
                come up with a perfect solution to a real-life problem and turn
                it into a viable business idea? Then here we go...
              </p>
            </div>

            <div className="webinar_main_img_section">
              <img src={webinarImg2} alt="" />
              <h1>Webinar</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
