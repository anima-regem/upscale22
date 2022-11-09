import React from 'react'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'
import PromoVideo from '../Components/PromoVideo/PromoVideo'
import Schedule from '../Components/schedule/Schedule'
import WebinarSection from '../Components/WebinarSection/WebinarSection'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Schedule/>
        <WebinarSection/>
        <PromoVideo/>
        <Footer/>
    </div>
  )
}

export default Home