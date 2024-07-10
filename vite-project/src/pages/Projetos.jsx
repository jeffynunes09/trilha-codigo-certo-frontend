import React, { useState, useEffect,useContext } from 'react';
import CardProjetos from '../components/cardProjetos';
import api from './api';
import './Projetos.css';
import { UserContext } from '../context/UserContext';
import { Link } from 'react-router-dom';

function Projetos() {
  // Estado para armazenar os projetos
  const [projeto, setProjeto] = useState([]);
  const { user, setUser } = useContext(UserContext);

  // Função para buscar os projetos
  const fetchProjetos = async () => {
    try {
      const response = await api.get('/projects/myProjects');
      setProjeto(response.data
      ); // Atualiza o estado com os dados recebidos
      console.log(response)
    } catch (error) {
      console.error('Erro ao buscar os projetos:', error);
    }
  };

  // useEffect para buscar os projetos quando o componente for montado
  useEffect(() => {
    fetchProjetos();
  }, []);

  return (
    <div className='container-home'>
      <h2 id='title-page'>
        CRIE SEUS<span><br /> PROJETOS</span>
      </h2>
      {user ? (
        <Link to ='/newProject'> <button className='submit'>Criar Novo Projeto</button></Link>
    ) : (
      <></>
    )}
      <div className='container-card'>
        
      {projeto.map((projeto) => (
          <CardProjetos 
            key={projeto.id} 
            name={projeto.name} 
            description={projeto.description} 
          />
        ))}
        
      </div>
    </div>
  );
}

export default Projetos;
