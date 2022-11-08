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
            <ReactPlayer
              url=""
              playing={true}
              loop={true}
              controls={false}
              width="100%"
              height="100%"
              light={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoVideo;
