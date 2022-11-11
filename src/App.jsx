import React from "react";
import "./App.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
