// Home.js
import React from 'react';
import imgHeader from  '../assets/image1.png'
import './Home.css'


function Home() {
  
  return (
  
   <div className='container-home'>
    <h1 className='title-home'>
    BEM VINDO AO GERENCIADOR DE<span><br></br> PROJETOS</span>
    </h1>
    <img className='header-img' src={imgHeader} alt="" />
   </div>

   
   
  );
}

export default Home;

