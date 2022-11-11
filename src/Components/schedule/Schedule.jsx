import React from "react";
import scheduleImageMob from "../../assets/ScheduleMobile.svg"
import scheduleImage from "../../assets/schedule.svg";
import "./Schedule.css";

const Schedule = (props) => {
  return (
    <div
      className="Schedule container align-items-center justify-content-center" id="schedule" ref={props.scheduleRef}>
        <div className="row text-center m-auto hero-text">
            <h1>SCHEDULE</h1>
            <div></div>
        </div>
        <div className="row m-auto">
            <img src={scheduleImageMob} alt="" className="mobile"/>
            <img src={scheduleImage} alt="" className="desktop"/>
        </div>
    </div>
  );
};

export default Schedule;
