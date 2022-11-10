import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../Pages/Home";
import WebinarPage from "../../Pages/WebinarPage";
import KnowMore from "../../Pages/KnowMore";
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from '../../helpers/ScrollToTop';

function AnimatedRoutes() {
  const location = useLocation();
  return (
      <AnimatePresence>
          <ScrollToTop />
          <Routes key={ location.pathname } location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/webinar" element={<WebinarPage/>} />
            <Route path="/know-more" element={<KnowMore/>}/>
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;