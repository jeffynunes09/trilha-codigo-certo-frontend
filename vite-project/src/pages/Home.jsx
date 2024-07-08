// Home.js
import React from 'react';
import './Home.css';

import datas from '../datas.js';
import CardProjetos from '../components/cardProjetos.jsx';

function Home() {
  const data = datas;

  return (
    <div className='container-home'>
      <h2 id='title-page'>
        BEM VINDO AO GERENCIADOR DE<span> PROJETOS</span>
      </h2>
      <div className='container-card'>
        {data.map((projeto) => (
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

export default Home;