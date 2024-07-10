
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import api from './api';
import Cookies from 'js-cookie';
import { UserContext } from '../context/UserContext';
import './CriarProjeto.css'
function CriarProjetos() {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const { user,setUser } = useContext(UserContext);
    const navigate = useNavigate();
  
    // Função para lidar com a submissão do formulário
    const handleSubmit = async (event) => {
      event.preventDefault(); // Prevenir o comportamento padrão do formulário
  
      if (!name || !description ) {
        console.error('Nome ou Descriçao são o brigatorios');
        return;
      }
  
      try {
        const response = await api.post('/projects/create', { name,description,user});
        console.log('Resposta da API:', response.data);
        
        navigate('/projetos');
      } catch (error) {
        console.error('Erro ao realizar cadastro:', error);
      }
    };
  
  return (
   <div>
    <form onSubmit={handleSubmit} className='container-form'>
        <h2>CRIAR NOVO PROJETO</h2>
        <label className='name-input'  htmlFor="nome">NOME DO PROJETO</label>
        <div>
           
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder='NOME DO SEU PROJETO'
            className='input'
            type='text'
            name='nome'
            id='nome'
          />
        </div>
        <label className='name-input' htmlFor="nome">DESCRIÇÃO DO PROJETO</label>
        <div>
       
          <textarea 
            onChange={(e) => setDescription(e.target.value)}
            placeholder='DESCRIÇÃO DO PROJETO'
            className='textarea-custom'
            
            name='description'
            id='description'
          />
        </div>
        <div className='container-button'>
          <button className='submit' type='submit'>Enviar</button>
        </div>
      </form>
    </div>
   
  )
}

export default CriarProjetos