// Projetos.js
import React, { useState, useEffect, useContext } from 'react';
import CardProjetos from '../components/cardProjetos';
import api from './api';
import './Projetos.css';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';
import CriarProjetos from './CriarProjetos';

function Projetos() {
  // Estado para armazenar os projetos
  const [projetos, setProjetos] = useState([]);
  const { user } = useContext(UserContext);
  const [editingProject, setEditingProject] = useState(null); // Estado para controlar o projeto sendo editado

  // Função para buscar os projetos
  const fetchProjetos = async () => {
    try {
      const response = await api.get('/projects/myProjects');
      setProjetos(response.data); // Atualiza o estado com os dados recebidos
      console.log(response);
    } catch (error) {
      console.error('Erro ao buscar os projetos:', error);
    }
  };

  // useEffect para buscar os projetos quando o componente for montado
  useEffect(() => {
    fetchProjetos();
  }, []);

  // Função para lidar com o clique no botão "EDITAR"
  const handleEditClick = (projeto) => {
    setEditingProject(projeto); // Define o projeto sendo editado
  };

  return (
    <div className='container-home'>
      <h2 id='title-page'>
        CRIE SEUS<span><br /> PROJETOS</span>
      </h2>
      {user ? (
        <Link to='/newProject'> <button className='submit'>Criar Novo Projeto</button></Link>
      ) : (
        <></>
      )}
      {editingProject ? (
        <CriarProjetos title="EDITAR PROJETO" projeto={editingProject} />
      ) : (
        <div className='container-card'>
          {projetos.map((projeto) => (
            <CardProjetos
              key={projeto._id}
              name={projeto.name}
              description={projeto.description}
              nameButton1='EDITAR'
              nameButton='EXCLUIR'
              onEditClick={() => handleEditClick(projeto)} // Passa a função handleEditClick
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Projetos;
