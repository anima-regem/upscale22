import React from 'react'
import KnowMoreComp from '../Components/KnowMoreComp/KnowMoreComp'
import Footer from '../Components/Footer/Footer'
import HeaderArrow from '../Components/HeaderArrow/HeaderArrow'
import Navbar from '../Components/Navbar/Navbar'
import useTop from '../helpers/ScrollToTop'
import { motion } from 'framer-motion'

const KnowMore = () => {
  useTop()
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{ opacity: 1 }}
    transition = {{ duration: 0.3, ease: "easeOut"}}
    >
        <Navbar/>
        <KnowMoreComp/>
        <Footer/>
    </motion.div>
  )
}

export default KnowMore