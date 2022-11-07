import React from 'react'
import '../HeaderArrow/HeaderArrow.css'
import RightArrow from '../../assets/icons/arrow1.svg'
import LeftArrow from '../../assets/icons/arrow2.svg'


const HeaderArrow = () => {
  return (
    <div className='header_arrow'>
        <div className="arrow_background">
            <img src={LeftArrow} alt="" />
        </div>
        <div className="arrow_background">
            <img src={RightArrow} alt="" />
        </div>
    </div>
  )
}

export default HeaderArrow