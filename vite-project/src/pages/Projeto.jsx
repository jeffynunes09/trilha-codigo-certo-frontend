// Projeto.js
import React, { useContext, useEffect, useState } from 'react';
import CardProjetos from '../components/cardProjetos';
import { ProjetoContext } from '../context/ProjetoContext';
import { useNavigate, useParams } from 'react-router-dom';
import api from './api';

function Projeto() {

  const {id} = useParams()
  const [dados,setDados] =useState([])

  const navigate = useNavigate();
  
  const response = async () => {
    const project  = await api.get(`projects/findProject/${id}`)
    console.log(project.data.project)
    setDados(project.data.project)
    
  }

  useEffect(() => {
    
  response()
},[])

const handleClick = () => {
  navigate('/projetos') 
};



  return (
    <div className='container-card'>
    
 
        <div className='container-card'>
          
            <CardProjetos
              key={dados._id}
              name={dados.name}
              description={dados.description}
              nameButton1='VOLTAR'
              nameButton='EXCLUIR'
              onEditClick={() => handleClick()}
            />
          
        </div>
      
   
  </div>
  );
}

export default Projeto;
