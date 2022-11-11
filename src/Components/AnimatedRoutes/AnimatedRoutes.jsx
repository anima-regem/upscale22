import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../Pages/Home";
import WebinarPage from "../../Pages/WebinarPage";
import KnowMore from "../../Pages/KnowMore";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "../../helpers/ScrollToTop";
import webinarData from '../../Data/Webinar.json'
import Speakers from "../../Pages/Speakers"

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/webinar/:id"
          element={<WebinarPage webinars={webinarData} />}
        />
        <Route path="/about" element={<KnowMore />} />
        <Route path="/speakers" element={<Speakers.jsx />}/>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
