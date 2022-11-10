import React from 'react'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import SpeakerSection from '../Components/SpeakerSection/SpeakerSection'

function Speakers() {
  return (
      <div id='speakers'>
          <Navbar />
            <SpeakerSection />
          <Footer />
    </div>
  )
}

export default Speakers