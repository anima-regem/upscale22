import React,{useEffect} from "react";
import HeaderArrow from "../HeaderArrow/HeaderArrow";
import "../Webinar/Webinar.css";
import webinarImg from "../../assets/images/webinarImg.png";
import webinarImg2 from "../../assets/images/webinarImg2.png";
import { useContext } from "react";
import { WebinarContext } from "../../context/WebinarContext";

// import webinarData from '../../json/webinar_data.json'

const Webinar = () => {

  const { webinarData, setWebinarData } = useContext(WebinarContext);
  console.log(webinarData)

  return (
    <>
      <div className="webinar">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 pt-5">
              <HeaderArrow />
            </div>

            <div className="col-lg-5 col-md-5 col-5 webinar_div">
              <img className="webinar_img" src={webinarData.img2} alt="" />
              <div className="webinar_details">
                <h1>{webinarData.heading2}</h1>
                {/* {console.log(webinarData.heading2)} */}
                <p>
                  {webinarData.para2}
                </p>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 col-7">
              <div className="webinar_details2">
                <h1>{webinarData.heading1}</h1>
                <p>
                  {webinarData.para1}
                </p>
              </div>

              <div className="webinar_main_img_section">
                <img src={webinarData.mainImg} alt="" />
                <h1>Webinar</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Webinar;
