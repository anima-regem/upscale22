import React from "react";
import "./App.css";
import Schedule from "./components/schedule/Schedule";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import WebinarPage from "./Pages/WebinarPage";
import TicketPage from "./Pages/TicketPage";
import KnowMore from "./Pages/KnowMore";
import webinarData from "./Data/Webinar.json";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
