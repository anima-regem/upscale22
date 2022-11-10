import React from "react";
import "../HeaderArrow/HeaderArrow.css";
import RightArrow from "../../assets/icons/arrow1.svg";
import LeftArrow from "../../assets/icons/arrow2.svg";
import { useNavigate } from "react-router-dom";

const HeaderArrow = ({ index, max }) => {
  const navigate = useNavigate();

  const handleClickLeft = () => {
    let nextPage = 0;
    if (index == 0) {
      nextPage = max;
    } else {
      nextPage = index;
    }
    navigate(`/webinar/${nextPage}`);
  };

  const handleClickRight = () => {
    let nextPage = 0;
    if (index == max - 1) {
      nextPage = 1;
    } else {
      nextPage = index + 2;
    }
    navigate(`/webinar/${nextPage}`);
  };
  return (
    <div className="header_arrow">
      <div onClick={handleClickLeft} className="arrow_background">
        <img src={LeftArrow} alt="" />
      </div>
      <div onClick={handleClickRight} className="arrow_background">
        <img src={RightArrow} alt="" />
      </div>
    </div>
  );
};

export default HeaderArrow;
