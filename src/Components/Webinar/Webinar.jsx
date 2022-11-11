import React from "react";
import HeaderArrow from "../HeaderArrow/HeaderArrow";
import "../Webinar/Webinar.css";
import { Navigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { convertPngtoJpg } from "../../util/pngTojpg";

const Webinar = ({ webinar, index, max }) => {
  if (webinar === undefined) return <Navigate to="/" />;
  return (
    <div className="webinar">
      <div className="blur"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 pt-5">
            <HeaderArrow index={index} max={max} />
          </div>

          <div className="col-lg-5 col-md-5 col-5 webinar_div">
            <LazyLoadImage
              className="webinar_img"
              effect="blur"
              placeholderSrc={`/blur/webinar_imgs/${convertPngtoJpg(webinar.img1)}`}
              src={webinar.img1}
              alt={webinar.desc2}
              key={webinar.img1}
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
              <div className="webinar_gradient"></div>
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