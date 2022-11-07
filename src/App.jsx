import React from "react";
import Banner from "./Components/Banner/Banner";
import "./App.css";
import Webinar from "./Components/Webinar/Webinar";
import { useState } from 'react'
import Schedule from './components/schedule/Schedule'

function App() {
  return (
    
    <div className="App">
      <Banner />
      <Schedule/>
      {/* <Webinar/> */}
    </div>
    );
}

export default App;
