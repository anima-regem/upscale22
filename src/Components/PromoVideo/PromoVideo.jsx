import React from "react";
import "../PromoVideo/PromoVideo.css";
import ReactPlayer from "react-player";

const PromoVideo = () => {
  return (
    <div className="promo_video">
      <div className="promo_video_heading">
        <div className="promo_video_blur"></div>
        <h1>AT A GLANCE</h1>
      </div>
      <div className="container">
        <div className="video_player_section">
          <div className="player">
            <div className="comming_soon_video">
              <h1>COMING</h1>
              <h2>SOON...</h2>
            </div>
            {/* <ReactPlayer
              url=""
              playing={true}
              playIcon={true}
              muted={true}
              loop={true}
              controls={false}
              width="100%"
              height="100%"
              light={false}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoVideo;
