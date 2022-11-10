import React from "react";
import Banner from "../components/Banner/Banner";
import Faq from "../components/Faq/Faq";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import PromoVideo from "../components/PromoVideo/PromoVideo";
import Schedule from "../components/schedule/Schedule";
import WebinarSection from "../components/WebinarSection/WebinarSection";

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
