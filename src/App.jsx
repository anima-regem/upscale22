import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import WebinarPage from "./Pages/WebinarPage";
import KnowMore from "./Pages/KnowMore";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          
        </Routes>
         <AnimatedRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
