import React from "react";
import Banner from "./components/Banner/Banner";
import "./App.css";
import Schedule from './components/schedule/Schedule'
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import WebinarPage from "./Pages/WebinarPage";
import TicketPage from "./Pages/TicketPage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webinar" element={<WebinarPage/>} />
          <Route path="/tickets" element={<TicketPage/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
