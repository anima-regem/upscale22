import React from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import WebinarPage from "./Pages/WebinarPage";
import KnowMore from "./Pages/KnowMore";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webinar" element={<WebinarPage/>} />
          <Route path="/know-more" element={<KnowMore/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
