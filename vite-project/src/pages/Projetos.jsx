// Projetos.js
import React, { useState, useEffect, useContext } from 'react';
import CardProjetos from '../components/cardProjetos';
import api from './api';
import './Projetos.css';
import { UserContext} from '../context/UserContext';
import {ProjetoContext} from '../context/ProjetoContext'
import { Link } from 'react-router-dom';
import CriarProjetos from './CriarProjetos';

function Projetos() {
  // Estado para armazenar os projetos
  const { projeto,setProjeto } = useContext(ProjetoContext );
  const { user } = useContext(UserContext);
  const [editingProject, setEditingProject] = useState(null); // Estado para controlar o projeto sendo editado

  // Função para buscar os projetos
  const fetchProjetos = async () => {
    try {
      const projetos = await api.get('/projects/myProjects');
       
      setProjeto(projetos.data)
     
      console.log(projeto)
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
      {user ? (
        <>
          {!editingProject && (
            <h2 id='title-page'>
              CRIE SEUS<span><br /> PROJETOS</span>
            </h2>
          )}
          <Link to='/newProject'> <button className='submit'>Criar Novo Projeto</button></Link>
        </>
      ) : (
        <></>
      )}
      {editingProject ? (
        <CriarProjetos title="EDITAR PROJETO" projeto={editingProject}  />
      ) : (
        <div className='container-card'>
          {projeto.map((projetos) => (
            <CardProjetos
              key={projetos._id}
              name={projetos.name}
              description={projetos.description}
              nameButton1='EDITAR'
              nameButton='EXCLUIR'
              onEditClick={() => handleEditClick(projetos)} // Passa a função handleEditClick
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Projetos;
