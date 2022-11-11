/*
FIXME:
[] Prevent rerendering when scrolled into from another page.
*/
import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.css";
import logo from "../../assets/images/logo.svg";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = ({scrollToRef, scheduleRef, faqRef }) => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const [opened, setOpened] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => setSticky(window.scrollY > 200);
  const handleClick = () => setClicked(!clicked);
  const toggleClass = () => setOpened(!opened);

  const scrollto = (el) => {
    window.scrollTo({
      top: el?.offsetTop,
      left: 0,
      behavior: "smooth"
    })
    console.log(el);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    opened && (document.body.style.overflow = "hidden");
    !opened && (document.body.style.overflow = "unset");
  }, [opened]);

  return (
    <>
      <header className={sticky ? "sticky" : ""}>
        <div className="logo" onClick={()=>navigate("/")}>
            <img src={logo} alt="upscale_logo" className="img_logo"  />
        </div>
        <div
          className={
            opened
              ? "opened mobile__nav__toggle menu"
              : "mobile__nav__toggle menu sticky"
          }
          onClick={() => {
            handleClick();
            toggleClass();
            handleScroll();
          }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path
              className="line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="line line2" d="M 20,50 H 80" />
            <path
              className="line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </div>
        <nav className="navbar__container">
          <div className="navbar__link__container" data-visibility={clicked}>
            <div className=" items">
              {/* TODO: Fix the issue active class is not applying when scrolled into.*/}
              <NavHashLink
                smooth
                className="navbar__nav__el"
                activeClassName="active_li"
                to="/#top"
              >
                HOME
              </NavHashLink>
              <Link className="navbar__nav__el" to="/about">
                ABOUT
              </Link>
              <NavLink
                className="navbar__nav__el"
                to="/#schedule"
                onClick={() => {scrollToRef(scheduleRef.current)}}
              >
                SCHEDULE
              </NavLink>
              <NavLink
                className="navbar__nav__el"
                activeClassName="active_li"
                to="/speakers"
              >
                SPEAKERS
              </NavLink>
              <NavHashLink
                smooth
                className="navbar__nav__el"
                to="#footer"
              >
                CONTACT
              </NavHashLink>
              <NavLink
                className="navbar__nav__el mobile_only"
                to="/#faq"
                onClick={() => {scrollToRef(faqRef.current)}}
              >
                FAQ
              </NavLink>
              <NavHashLink
                smooth
                className="navbar__nav__el mobile_only"
                activeClassName="active_li"
                to="#footer"
              >
                TEAM & ENQUIRY
              </NavHashLink>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
