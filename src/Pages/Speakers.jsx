import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import SpeakerSection from "../Components/SpeakerSection/SpeakerSection";
import { motion } from "framer-motion";
function Speakers() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      id="speakers"
    >
      <Navbar />
      <SpeakerSection />
      <Footer />
    </motion.div>
  );
}

export default Speakers;
