import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Webinar from "../Components/Webinar/Webinar";
import { motion } from 'framer-motion'
import Footer from "../Components/Footer/Footer";
import useTop from "../helpers/ScrollToTop";


const WebinarPage = ({ webinars }) => {
 const { id } = useParams();
  const index = Number(id) - 1;
    useTop();
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{ opacity: 1 }}
        transition = {{ duration: 0.3, ease: "easeOut"}}
        >
            <Navbar/>
            <Webinar webinar={webinars[index]} index={index} max={webinars?.length} />
            <Footer />
        </motion.div>
    );
};

export default WebinarPage;
