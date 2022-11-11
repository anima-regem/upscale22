import React from "react";
import Footer from "../Components/Footer/Footer";
import GrabTickets from "../Components/GrabTickets/GrabTickets";
import Navbar from "../Components/Navbar/Navbar";

const TicketPage = () => {
  return (
    <div>
      <Navbar />
      <GrabTickets />
      <Footer />
    </div>
  );
};

export default TicketPage;
