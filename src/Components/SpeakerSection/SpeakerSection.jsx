import React from "react";
import "./SpeakerSection.css";
import Card from "../Card/Card";
import webinarData from "../../Data/Webinar.json";
import mentorData from "../../Data/mentorData.json";

import { useNavigate } from "react-router-dom";

function SpeakerSection() {
  const navigate = useNavigate();
  return (
    <div className="speakers__mentors">
      <section className="speaker__section">
        <h1 className="speaker__heading">
          Speakers
          <div className="blur1"></div>
        </h1>
        <div className="speakers__container">
          {webinarData.map((speaker) => (
            <div
              className="speaker__el"
              onClick={() => navigate(`/webinar/${speaker.route}`)}
            >
              <Card
                imgUrl={speaker.img1}
                name={speaker.heading2}
                des={speaker.desc2}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="mentors__section">
        <h1 className="speaker__heading mentor__heading">
          Mentors
          <div className="blur2"></div>
        </h1>
        <div className="mentors__container">
        {mentorData.map((mentor) => (
            
          // <div className="mentor__el mentor_1">
          //   <Card imgUrl={mentor.img} name={mentor.name} rounded des={mentor.disc}></Card>
          // </div>
          <div></div>
          ))}
          
        </div>
      </section>
    </div>
  );
}

export default SpeakerSection;
