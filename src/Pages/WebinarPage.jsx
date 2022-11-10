import React,{useEffect} from 'react'
import Footer from '../components/Footer/Footer'
import Webinar from '../Components/Webinar/Webinar'


const WebinarPage = () => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <div>
        <Webinar/>
        <Footer/>
    </div>
  );
};

export default WebinarPage;
