import React from "react";
import "./SpeakerSection.css";
import Card from "../Card/Card";
import user from "../../assets/images/webinarImg.png";
import webinarData from "../../Data/Webinar.json";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
          {/* <div className="speaker__el">
                            <Card imgUrl={speaker1} name='User1' des="abcde"/>
                        </div>
                        <div className="speaker__el">
                            <Card imgUrl={speaker2} name="User2" des="abcde"/>
                        </div>
                        <div className="speaker__el">
                            <Card imgUrl={speaker3} name="User3" des="abcde"/>
                        </div>
                        <div className="speaker__el user5">
                            <Card imgUrl={speaker4} name="User4" des="abcde"/>
                        </div> */}
          {webinarData.map((speaker) => (
            <motion.div
              className="speaker__el"
              onClick={() => navigate(`/webinar/${speaker.route}`)}
              whileHover={{ scale: 1.1 }}
            >
              <Card
                imgUrl={speaker.img1}
                name={speaker.heading2}
                des={speaker.desc2}
              />
            </motion.div>
          ))}
        </div>
      </section>
      <section className="mentors__section">
        <h1 className="speaker__heading mentor__heading">
          Mentors
          <div className="blur2"></div>
        </h1>
        <div className="mentors__container">
          <div className="mentor__el mentor_1">
            <Card imgUrl={user} name="user1" rounded des="abcde"></Card>
          </div>
          <div className="mentor__el">
            <Card imgUrl={user} name="user2" rounded des="abcde"></Card>
          </div>
          <div className="mentor__el">
            <Card imgUrl={user} name="user3" rounded des="abcde"></Card>
          </div>
          <div className="mentor__el">
            <Card imgUrl={user} name="user4" rounded des="abcde"></Card>
          </div>
          <div className="mentor__el">
            <Card imgUrl={user} name="user5" rounded des="abcde"></Card>
          </div>
          <div className="mentor__el">
            <Card imgUrl={user} name="user6" rounded des="abcde"></Card>
          </div>
          <div className="mentor__el">
            <Card imgUrl={user} name="user7" rounded des="abcde"></Card>
          </div>
          <div className="mentor__el">
            <Card imgUrl={user} name="user8" rounded des="abcde"></Card>
          </div>
          <div className="mentor__el">
            <Card imgUrl={user} name="user9" rounded des="abcde"></Card>
          </div>
          <div className="mentor__el">
            <Card imgUrl={user} name="user10" rounded des="abcde"></Card>
          </div>
          <div className="mentor__el">
            <Card imgUrl={user} name="user11" rounded des="abcde"></Card>
          </div>
          <div className="mentor__el">
            <Card imgUrl={user} name="user12" rounded des="abcde"></Card>
          </div>
          <div className="mentor__el">
            <Card imgUrl={user} name="user13" rounded des="abcde"></Card>
          </div>
          <div className="mentor__el">
            <Card imgUrl={user} name="user14" rounded des="abcde"></Card>
          </div>
          <div className="mentor__el">
            <Card imgUrl={user} name="user15" rounded des="abcde"></Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpeakerSection;
