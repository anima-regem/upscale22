import React from "react";
import "../Navbar/Navbar.css";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container navbar">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="menu_links d-none">
            <p>HOME</p>
            <p>ABOUT</p>
            <p>SCHEDULE</p>
            <p>SPEAKERS</p>
            <p>CONTACT</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
