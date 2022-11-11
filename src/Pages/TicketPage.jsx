import React from "react";
import Footer from "../Components/Footer/Footer";
import GrabTickets from "../Components/GrabTickets/GrabTickets";
import Navbar from '../Components/Navbar/Navbar'
import { motion } from 'framer-motion'
const TicketPage = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{ opacity: 1 }}
    transition = {{ duration: 0.3, ease: "easeOut"}}
    >
      <Navbar/>
      <GrabTickets />
      <Footer />
    </motion.div>
  );
};

export default TicketPage;
