// Projetos.js
import React, { useState, useEffect, useContext } from 'react';
import CardProjetos from '../components/cardProjetos';
import api from './api';
import './Projetos.css';
import { UserContext } from '../context/UserContext';
import { ProjetoContext } from '../context/ProjetoContext';
import { Link } from 'react-router-dom';
import CriarProjetos from './CriarProjetos';
import { TextLimit } from '../components/TextLimit';

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

  const deleteProject = async (id) => {
    const userConfirmed = window.confirm("Você tem certeza que deseja deletar este projeto?");
    if (userConfirmed) {
      try {
        await api.delete(`projects/delete/${id}`);
        fetchProjetos(); // Atualiza a lista de projetos após a exclusão
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('A exclusão foi cancelada pelo usuário.');
    }
  };

  const handleEditClick = (projeto) => {
    setEditingProject(projeto); // Define o projeto sendo editado
  };

  const handleProjectUpdated = () => {
    setEditingProject(null); // Reseta o estado editingProject
    fetchProjetos(); // Atualiza a lista de projetos
  };

  useEffect(() => {
    fetchProjetos();
  }, []);

  return (
    <div className='container-home'>
      {user ? (
        <>
          {!editingProject && (
            <>
              <h2 id='title-page'>
                CRIE SEUS<span><br /> PROJETOS</span>
              </h2>
              <Link to='/newProject'><button className='submit'>Criar Novo Projeto</button></Link>
            </>
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
                  description={<TextLimit text={projetos.description} limit={300}></TextLimit>}
                  nameButton1='EDITAR'
                  nameButton='EXCLUIR'
                  onEditClick={() => handleEditClick(projetos)}
                  onDeleteClick={() => deleteProject(projetos._id)}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <>
        <h1>
          Pagina Não Encontrada
        </h1>
       </>
      )}
    </div>
  );
}

export default Projetos;
