import React from "react";
import scheduleImage from "../../assets/schedule.svg";
import "./Schedule.css";

const Schedule = () => {
  return (
    <div className="Schedule">
      <div>
        <h1>SCHEDULE</h1>
      </div>
      <img src={scheduleImage} alt="" />
    </div>
  );
};

export default Schedule;
