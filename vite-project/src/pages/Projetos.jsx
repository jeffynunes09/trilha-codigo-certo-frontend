// Projetos.js
import React, { useState, useEffect, useContext } from 'react';
import CardProjetos from '../components/cardProjetos';
import api from './api';
import './Projetos.css';
import { UserContext } from '../context/UserContext';
import { ProjetoContext } from '../context/ProjetoContext';
import { Link } from 'react-router-dom';
import CriarProjetos from './CriarProjetos';

function Projetos() {
  const { projeto, setProjeto } = useContext(ProjetoContext);
  const { user } = useContext(UserContext);
  const [editingProject, setEditingProject] = useState(null);

  const fetchProjetos = async () => {
    try {
      const response = await api.get('/projects/myProjects');
      setProjeto(response.data); // Atualiza o estado com os dados recebidos
      console.log(response.data);
    } catch (error) {
      console.error('Erro ao buscar os projetos:', error);
    }
  };

  useEffect(() => {
    fetchProjetos();
  }, []);

  const handleEditClick = (projeto) => {
    setEditingProject(projeto); // Define o projeto sendo editado
  };

  const handleProjectUpdated = (updatedProjeto) => {
    setEditingProject(null); // Reseta o estado editingProject
    fetchProjetos(); // Atualiza a lista de projetos
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
        <CriarProjetos
          title="EDITAR PROJETO"
          projeto={editingProject}
          onProjectUpdated={handleProjectUpdated}
        />
      ) : (
        <div className='container-card'>
          {projeto.map((projetos) => (
            <CardProjetos
              key={projetos._id}
              name={projetos.name}
              description={projetos.description}
              nameButton1='EDITAR'
              nameButton='EXCLUIR'
              onEditClick={() => handleEditClick(projetos)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Projetos;
