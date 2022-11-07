import React, { useState, useRef, useEffect } from "react";
import "../Coundown/Coundown.css";

const Coundown = () => {
  const [dayTimer, setDayTimer] = useState(0);
  const [hourTimer, setHourTimer] = useState(0);
  const [minuteTimer, setMinuteTimer] = useState(0);
  const [secondTimer, setSecondTimer] = useState(0);

  let interval = useRef();

  const startTimer = () => {
    const coundownDate = new Date("Nov 20, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = coundownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop timer
        clearInterval(interval.current);
      } else {
        setDayTimer(days);
        setHourTimer(hours);
        setMinuteTimer(minutes);
        setSecondTimer(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="coundown">
      <div className="coundown_section">
        <div className="coundown_heading">
          <h1>COUNTDOWN</h1>
        </div>
        <div className="coundown_timer">
          <div className="coundown_time">
            <div className="coundown_time_heading">
              <h1>{dayTimer}</h1>
            </div>
            <div className="coundown_time_para">
              <p>DAYS</p>
            </div>
          </div>
          <div className="coundown_time">
            <div className="coundown_time_heading">
              <h1>{hourTimer}</h1>
            </div>
            <div className="coundown_time_para">
              <p>HOURS</p>
            </div>
          </div>
          <div className="coundown_time">
            <div className="coundown_time_heading">
              <h1>{minuteTimer}</h1>
            </div>
            <div className="coundown_time_para">
              <p>MINUTES</p>
            </div>
          </div>
          <div className="coundown_time">
            <div className="coundown_time_heading">
              <h1>{secondTimer}</h1>
            </div>
            <div className="coundown_time_para">
              <p>SECONDS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coundown;
