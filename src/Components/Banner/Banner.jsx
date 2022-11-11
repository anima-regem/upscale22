import React from "react";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

// logos
import BigLogo from "../../assets/images/bigLogo.svg";
import IeeeLogo from "../../assets/images/ieeeLogo.png";
import IedcLogo from "../../assets/images/Iedc.png";
import KsmLogo from "../../assets/images/ksmLogo.png";
import TbiLogo from "../../assets/images/tbiLogo.png";
import ieeeMalabar from "../../assets/images/ieeeMalabar.svg";
import Coundown from "../Coundown/Coundown";
import Footer from "../Footer/Footer";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <>
      <main>
        <div className="banner">
          <div className="banner_body">
            <div className="background_img">
              <div className="banner_logo">
                <img src={BigLogo} alt="Logo" />
              </div>
              <div className="banner_register_btn">
                <button
                  className="upscale_btn"
                  onClick={() => navigate("/ticket")}
                >
                  Register
                </button>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6"></div>
                  <div className="col-lg-6 banner_details">
                    <h1>
                      What is <span>UPSCALE?</span>
                    </h1>
                    <p>
                      Upscale'22 is the 3rd edition of the flagship event
                      conducted by IEEE SB GEC Palakkad, focusing on the
                      exposure of the participants to different dimensions of
                      entrepreneurship and start-up ideas. Shaping young minds
                      to become efficient and professional entrepreneurs through
                      a week long program.
                    </p>
                    <div className="learn_more_btn">
                      <button
                        className="upscale_btn"
                        onClick={() => navigate("/ticket")}
                      >
                        Learn more
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-12 banner_coundown">
                    <Coundown />
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="row">
                      <div className="col-lg-6 col-12 banner_collaborating">
                        <div className="collab_blur"></div>
                        <div className="blur-collab"></div>
                        <h2>COLLABORATING</h2>
                        <h1>SOCIETIES</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="societies mt-4">
                <div className="container">
                  <div className="row societies_logos">
                    <div className="col-lg-2 col-md-4 col-6 societie_logo">
                      <img src={ieeeMalabar} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-4 col-6 societie_logo">
                      <img src={IeeeLogo} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-4 col-6 societie_logo">
                      <img src={IedcLogo} alt="" />
                    </div>
                    <div className="col-lg-3 col-md-6 col-6 societie_logo">
                      <img src={KsmLogo} alt="" />
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12 societie_logo">
                      <img src={TbiLogo} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Banner;
