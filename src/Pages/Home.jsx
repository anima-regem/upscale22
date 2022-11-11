import React, { useRef, useEffect } from "react";
import Banner from "../Components/Banner/Banner";
import Faq from "../Components/Faq/Faq";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import PromoVideo from "../Components/PromoVideo/PromoVideo";
import Schedule from "../Components/schedule/Schedule";
import WebinarSection from "../Components/WebinarSection/WebinarSection";
import { motion } from "framer-motion";

const Home = () => {
  const scheduleRef = useRef('schedule');
  const faqRef = useRef('faq');
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <motion.div
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <Navbar scrollToRef={scrollToRef} scheduleRef={ scheduleRef } faqRef={faqRef} />
      <Banner />
      <Schedule scheduleRef={ scheduleRef } />
      <WebinarSection />
      <PromoVideo />
      <Faq faqRef={ faqRef } />
      <Footer />
    </motion.div>
  );
};

export default Home;
