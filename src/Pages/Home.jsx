import React from "react";
import Banner from "../Components/Banner/Banner";
import Faq from "../Components/Faq/Faq";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import PromoVideo from "../Components/PromoVideo/PromoVideo";
import Schedule from "../Components/schedule/Schedule";
import WebinarSection from "../Components/WebinarSection/WebinarSection";

const Home = () => {
    return (
        <div id="home">
            <Navbar/>
            <Banner/>
            <Schedule/>
            <WebinarSection/>
            <PromoVideo/>
            <Faq/>
            <Footer/>
        </div>
    );
};

export default Home;
