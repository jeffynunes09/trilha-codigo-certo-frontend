// Home.js
import { useState, useContext } from 'react';
import imgHeader from '../assets/image1.png';
import './Home.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import CriarProjetos from './CriarProjetos';

function Home() {
  const { user } = useContext(UserContext);
  const [showForm, setShowForm] = useState(false);

  const handleCreateProjectClick = () => {
    setShowForm(true);
  };

  return (
    <div className='container-home'>
      <h1 className='title-home'>
        BEM VINDO AO GERENCIADOR DE<span><br /> PROJETOS</span>
      </h1>
      {user ? (
        <button className='submit' onClick={handleCreateProjectClick}>Criar Projeto</button>
      ) : (
        <></>
      )}
      {showForm ? (
        <CriarProjetos  title='CRIAR PROJETO' />
      ) : (
        <img className='header-img' src={imgHeader} alt="" />
      )}
    </div>
  );
}

export default Home;
