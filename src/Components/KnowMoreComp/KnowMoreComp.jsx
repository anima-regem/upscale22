import React from "react";
import aboutMobile from "../../assets/about-mobile.svg";
import recallMobile from "../../assets/recall-mobile.svg";
import aboutDesktop from "../../assets/about-desktop.svg";
import recallDesktop from "../../assets/recall-desktop.svg";
import "./KnowMoreComp.css";

const KnowMoreComp = () => {
  return (
    <div className="KnowMore">
      <div id="aboutMobile" className="row">
        <img src={aboutMobile} alt="" />
      </div>
      <div id="recallMobile" className="row">
        <img src={recallMobile} alt="" />
      </div>
      <div id="aboutDesktop" className="row">
        <img src={aboutDesktop} alt="" />
      </div>
      <div id="recallDesktop" className="row">
        <img src={recallDesktop} alt="" />
      </div>
    </div>
  );
};

export default KnowMoreComp;
