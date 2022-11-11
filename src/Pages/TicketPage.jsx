import React from "react";
import Footer from "../components/Footer/Footer";
import GrabTickets from "../components/GrabTickets/GrabTickets";
import Navbar from '../Components/Navbar/Navbar'

const TicketPage = () => {
  return (
    <div>
      <Navbar/>
      <GrabTickets />
      <Footer />
    </div>
  );
};

export default TicketPage;
