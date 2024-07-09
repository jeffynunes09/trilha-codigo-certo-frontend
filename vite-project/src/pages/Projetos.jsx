import React from 'react'
import CardProjetos from '../components/cardProjetos'
import datas from '../datas'
import './Projetos.css'
function Projetos() {

    const data = datas
  return (
    <div className='container-home'>
    <h2 id='title-page'>
   CRIE SEUS<span><br></br> PROJETOS</span>
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
  )
}

export default Projetos