// cardProjetos.jsx
import React from 'react';
import './cardProjetos.css';
import { Link } from 'react-router-dom';

function CardProjetos({ name, description, nameButton1, nameButton, }) {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>{description}</p>
       <Link to='/editProject'><button className='edit-button'>{nameButton1}</button></Link>
      <button className='delete-button'>{nameButton}</button>
    </div>
  );
}

export default CardProjetos;
