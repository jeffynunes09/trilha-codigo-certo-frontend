// Home.js
import {useContext} from 'react';
import imgHeader from  '../assets/image1.png'
import './Home.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
function Home() {
  const { user, setUser } = useContext(UserContext);
  return (
    
   <div className='container-home'>
    <h1 className='title-home'>
    BEM VINDO AO GERENCIADOR DE<span><br></br> PROJETOS</span>
    </h1>
    {user ? (
        <Link to ='/newProject'> <button className='submit'>Criar Projeto</button></Link>
    ) : (
      <></>
    )}
    <img className='header-img' src={imgHeader} alt="" />
    
   </div>

   
   
  );
}

export default Home;

