import "../Footer/Footer.css";
import React, { useState } from "react";

import instagramLogo from "../../assets/icons/instagram.svg";
import linkedinLogo from "../../assets/icons/linkedin.svg";
import logoCopy from "../../assets/icons/logo_u.svg";

const Footer = () => {
  const [copyStatus, setCopyStatus] = useState("Click to copy the link");

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus(null), 2000);
    } catch (e) {
      setCopyStatus("Failed to copy");
      setTimeout(() => setCopyStatus(null), 2000);
    }
  };

  return (
    <>
      <footer className="section footer__container" id="footer">
        <section className="footer__useful-links">
          <h4 className="footer__heading footer__heading__useful">
            USEFUL LINKS
          </h4>
          <ul className="footer__list_container">
            <li className="footer__useful__link">
              <a
                className="footer__link"
                href="https://www.instagram.com/ieeesbgecpkd/"
                target="_blank"
              >
                @ieeesbgecpkd
              </a>
            </li>
            <li className="footer__useful__link">
              <a
                className="footer__link"
                href="https://linkedin.com/company/ieeesbgecpkd"
                target="_blank"
              >
                ieeesbgecpkd
              </a>
            </li>
            <li className="footer__useful__link">
              <a
                className="footer__link"
                href="https://ieee.org"
                target="_blank"
              >
                IEEE
              </a>
            </li>
          </ul>
        </section>
        <section className="section footer__contact">
          <h4 className="footer__heading">CONTACT US</h4>
          <ul className="footer__link__container">
            <li>
              <a className="footer__link" href="tel:+919495951143">
                Sanju: +91 9495951143
              </a>
            </li>
            <li>
              <a className="footer__link" href="tel:+919895645290">
                Thamna: +91 9895645290
              </a>
            </li>
            <li>
              <a
                className="footer__link"
                href="mailto:ieee@gecskp.ac.in"
                target="_blank"
              >
                Email: ieee@gecskp.ac.in
              </a>
            </li>
          </ul>
        </section>
        <section className="section footer__about">
          <h4 className="footer__heading">ABOUT IEEE SB GEC PKD</h4>
          <p className="footer__about__para">
            The IEEE Students branch of Government Engineering College
            Palakkad,we work for providing an ideal platform for young minds to
            nourish their technical skills as an engineer by providing a
            technical home. The SB comprises actively working with an IAS,
            ComSoc, and Computer Society and also the WiE affinity group in
            association for achieving the objectives.
          </p>
        </section>
        <section className="section footer__end">
          <p>Copyright &copy; 2022 IEEE SB GECPKD. All Rights Reserved</p>
          <div className="footer__socials">
            <a
              className="clip"
              onClick={() => {
                copy("https://upscale22.vercel.app/");
              }}
              data-copy-status={copyStatus}
            >
              <img src={logoCopy} alt="logo_u" />
            </a>
            <a href="https://www.instagram.com/ieeesbgecpkd/" target="_blank">
              <img src={instagramLogo} alt="instagram_logo" />
            </a>
            <a href="https://linkedin.com/company/ieeesbgecpkd" target="_blank">
              <img src={linkedinLogo} alt="linkedin_logo" />
            </a>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
