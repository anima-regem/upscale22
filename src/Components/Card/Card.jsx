import React from 'react'
import './Card.css'
export default function Card({imgUrl, name, des, rounded}) {
  return (
      <div className={rounded ? 'card__container rounded__card__container':'card__container'}>
          <div className="card__img__container">
              <img className={rounded ? 'img__rounded': null} src={imgUrl} alt={`${name}'s image`} />
          </div>
          <div className="card__text__container">
              <h3 className='card__text prim__text'> {name}</h3>
              <h4 className='card__text sec__text'>  { des } </h4>
          </div>
    </div>
  )
}
