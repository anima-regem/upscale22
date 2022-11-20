import React from 'react'
import './GuestCard.css'

export default function ( { name, imgUrl, des }) {
  return (
      <div className='guest__card__container'>
      <div className="guest__img__cont">
        <img src={imgUrl} alt="" />
      </div>
          <div className="guest_card_text">
              <h3 className='guest__name'>{ name }</h3>
              <p className='guest__des'>
                  { des}
              </p>
          </div>
    </div>
  )
}
