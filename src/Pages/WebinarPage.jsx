import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Webinar from "../Components/Webinar/Webinar";
import { motion } from 'framer-motion'
import Footer from "../Components/Footer/Footer";
import useTop from "../helpers/ScrollToTop";

const WebinarPage = () => {
    useTop();
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{ opacity: 1 }}
        exit= {{opacity: 0}}
        transition = {{ duration: 0.2, ease: "easeOut"}}
        >
            <Navbar/>
            <Webinar />
            <Footer />
        </motion.div>
    );
};

export default WebinarPage;
