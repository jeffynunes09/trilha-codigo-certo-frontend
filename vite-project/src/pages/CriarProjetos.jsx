// CriarProjetos.js
import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CriarProjeto.css';
import api from './api';
import { UserContext } from '../context/UserContext';

function CriarProjetos({ title, projeto, }) {
  const [name, setName] = useState(projeto ? projeto.name : '');
  const [description, setDescription] = useState(projeto ? projeto.description : '');
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (projeto) {
      setName(projeto.name);
      setDescription(projeto.description);
    }
  }, [projeto]);

  // Função para lidar com a submissão do formulário
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário

    if (!name || !description) {
      console.error('Nome ou Descrição são obrigatórios');
      return;
    }

    try {
      console.log('Dados a serem enviados:', { name, description, user });

      let response;
      if (projeto) {
        response = await api.put(`/projects/updated/${projeto._id}`, { name, description, user });
        navigate(`/project/findProject/${projeto._id}`)
      } else {
        response = await api.post('/projects/create', { name, description, user });
         navigate(`/projetos`)
      }

      console.log('Resposta da API:', response.data);
     
    } catch (error) {
      console.error('Erro ao realizar cadastro:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='container-form'>
        <h2>{title}</h2>
        <label className='name-input' htmlFor="nome">NOME DO PROJETO</label>
        <div>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder='NOME DO SEU PROJETO'
            className='input'
            type='text'
            name='nome'
            id='nome'
            value={name}
          />
        </div>
        <label className='name-input' htmlFor="description">DESCRIÇÃO DO PROJETO</label>
        <div>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder='DESCRIÇÃO DO PROJETO'
            className='textarea-custom'
            name='description'
            id='description'
            value={description}
          />
        </div>
        <div className='container-button'>
          <button className='submit' type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default CriarProjetos;
