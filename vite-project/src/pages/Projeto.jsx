// Projeto.js
import React, { useContext, useEffect, useState } from 'react';
import CardProjetos from '../components/cardProjetos';
import { ProjetoContext } from '../context/ProjetoContext';
import { useNavigate, useParams } from 'react-router-dom';
import api from './api';
import { TextLimit } from '../components/TextLimit';
function Projeto() {

  const {id} = useParams()
  const [dados,setDados] =useState([])

  const navigate = useNavigate();
  
  const response = async () => {
   try {
    const project  = await api.get(`projects/findProject/${id}`)
    console.log(project.data.project)
    setDados(project.data.project)
   } catch (error) {
    console.log(error)
    
   }
    
  }
  

  const deleteProject =  async()=> {
    const userConfirmed = window.confirm("Você tem certeza que deseja deletar este projeto?");
    if(userConfirmed){
      try {
        const del = await api.delete(`projects/delete/${id}`)
        console.log(del)
        navigate('/projetos')
      } catch (error) {
        console.log(error)
      }
      
    }else{
      console.log('A exclusão foi cancelada pelo usuário.');
    }
  }


  useEffect(() => {
    
  response()

},[])

const handleClick = () => {
  navigate('/projetos') 
};



  return (
    
 
     <div className='container-home'>
 
        <div className='container-card'>
          
            <CardProjetos
              key={dados._id}
              name={dados.name}
              description={<TextLimit text={dados.description} limit={350}/>}
              nameButton1='VOLTAR'
              nameButton='EXCLUIR'
              onDeleteClick={() => deleteProject()}
              onEditClick={() => handleClick()}
            />
          
        </div>
        </div>
   
 
  );
}

export default Projeto;
