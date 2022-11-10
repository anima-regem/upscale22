import React from "react";
import "./App.css";
import { BrowserRouter} from "react-router-dom";
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
