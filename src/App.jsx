import React from "react";
import Banner from "./components/Banner/Banner";
import "./App.css";
import Schedule from './components/schedule/Schedule'
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
          <Navbar />
          <Banner/>
          <Schedule/>
          <Footer/>
      </div>
    );
}

export default App;
