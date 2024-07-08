import React from 'react'
import './cardProjetos.css'
function CardProjetos({name,description}) {
  return (
    <div className='card'>
        <h1 className='title-projeto'>{name}</h1>
        <p className='description-projeto'>{description}</p>

    </div>
  )
}

export default CardProjetos