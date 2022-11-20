import React from 'react'
import GuestCard from '../GuestCard/GuestCard'
import './GuestSection.css'
import GuestData from '../../Data/Guests.json'
// import Card from '../Card/Card'
function GuestSection() {
  return (
      <section className='guest__section'>
        <h1 className='guest__header'>Guests</h1>
      <div className="guest__container">
        {
          GuestData.map((guest) => (
            <div className='guest__el'>
              <GuestCard imgUrl={guest.img} name={guest.name} des={ guest.desc } />
            </div>
          ))
              }
          </div>
    </section>
  )
}

export default GuestSection