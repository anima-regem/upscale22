import React from "react";
import "./App.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";
import 'react-lazy-load-image-component/src/effects/blur.css'

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
