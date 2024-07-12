// cardProjetos.jsx
import React from 'react';
import './cardProjetos.css';

function CardProjetos({ name, description, nameButton1, nameButton, onEditClick,onDeleteClick }) {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>{description}</p>
      <div>
      <button className='edit-button' onClick={onEditClick}>{nameButton1}</button>
      <button className='delete-button ' onClick={onDeleteClick}>{nameButton}</button>
      </div>
    </div>
  );
}

export default CardProjetos;
