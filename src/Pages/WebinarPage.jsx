import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Webinar from "../Components/Webinar/Webinar";

const WebinarPage = ({ webinars }) => {
  const { id } = useParams();
  const index = Number(id) - 1;
  return (
    <div>
      <Navbar />
      <Webinar webinar={webinars[index]} index={index} max={webinars?.length} />
    </div>
  );
};

export default WebinarPage;
