import React from "react";
import "../GrabTickets/GrabTickets.css";
import HeaderArrow from "../HeaderArrow/HeaderArrow";

import ticketImg from "../../assets/images/Eventprgression.svg";
import ticketsImg from "../../assets/images/tickets.svg";
import mobileTickets from "../../assets/images/mobileTickets.svg";

const GrabTickets = () => {
  return (
    <div className="grab_ticket_section">
      <img className="grab_ticket_img" src={ticketImg} alt="" />
      <section>
        <div className="container tickets">
          <h1>TICKETS</h1>
          <p>Choose the ticket</p>
          <img className="ticket_desktop" src={ticketsImg} alt="" />
        </div>
        <img className="ticket_mobile" src={mobileTickets} alt="" />
      </section>
    </div>
  );
};

export default GrabTickets;
