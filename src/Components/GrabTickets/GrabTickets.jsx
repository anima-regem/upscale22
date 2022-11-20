import React from "react";
import "../GrabTickets/GrabTickets.css";
import HeaderArrow from "../HeaderArrow/HeaderArrow";

import ticketImg from "../../assets/images/Eventprgression.svg";
import ticketsImg from "../../assets/images/tickets.svg";
import mobileTickets from "../../assets/images/mobileTickets.svg";
import { motion } from "framer-motion";
import greenTicket from "../../assets/images/greenTicket.svg";
import pinkTicket from "../../assets/images/pinkTicket.svg";
import lightgreenTicket from "../../assets/images/lightgreenTicket.svg";

const GrabTickets = () => {
  let link = "https://www.yepdesk.com/open-register/636a901fc9e77c0001cb48fc";
  return (
    <div className="grab_ticket_section">
      <img className="grab_ticket_img" src={ticketImg} alt="" />
      <section>
        <div className="container tickets">
          <h1>TICKETS</h1>
          <p>Choose the ticket</p>
          <div className="ticket_blur"></div>
          <div className="row tickets_section">
            <div className="col-lg-6 col-md-6 col-sm-12 ticket">
              <motion.img
                className="full_width"
                src={greenTicket}
                alt=""
                onClick={() => (window.location.href = link)}
                whileHover={{ scale: 1.1 }}
              />
            </div>
            <div className="col-lg-6 col-md-6 col-12 ticket">
              <motion.img
                className="full_width"
                src={pinkTicket}
                alt=""
                onClick={() => (window.location.href = link)}
                whileHover={{ scale: 1.1 }}
              />
            </div>
            <div className="col-lg-12 col-md-12 col-12 ticket">
              <motion.img
                src={lightgreenTicket}
                alt=""
                onClick={() => (window.location.href = link)}
                whileHover={{ scale: 1.1 }}
              />
            </div>
          </div>
          {/* <img src={greenTicket} alt="" />
            <img src={greenTicket} alt="" />
            <img src={greenTicket} alt="" /> */}

          {/* <img className="ticket_desktop" src={ticketsImg} alt="" /> */}
        </div>
        {/* <img className="ticket_mobile" src={mobileTickets} alt="" /> */}
      </section>
    </div>
  );
};

export default GrabTickets;
