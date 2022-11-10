import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import WebinarPage from "./Pages/WebinarPage";
import KnowMore from "./Pages/KnowMore";
import webinarData from "./Data/Webinar.json";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/webinar/:id"
            element={<WebinarPage webinars={webinarData} />}
          />
          <Route path="/know-more" element={<KnowMore />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
