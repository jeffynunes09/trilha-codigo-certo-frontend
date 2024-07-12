import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { UserContext } from '../context/UserContext';
import './Navbar.css';
import Cookies from 'js-cookie'

function Navbar() {
  const { user, setUser } = useContext(UserContext);

  function handleLogout() {
    Cookies.remove('token');
    setUser(null);
  }

  return (
    <nav className='nav'>
      <a href="#"><img id='logo' src={logo} alt="" /></a>
      <ul className='container-items-nav'>
        <Link to='/'><li className='items-nav'>HOME</li></Link>
       
        {user ? (
          <>
            <Link to='/projetos'><li className='items-nav'>PROJETOS</li></Link> 
            <li className='items-nav'>Olá, {user.email}</li>
            <li className='items-nav back' onClick={handleLogout}>LOGOUT</li>
          </>
        ) : (
          <>
          
          <Link to='/login'><li className='items-nav back'>LOGIN</li></Link>
          <Link to='/signup'><li className='items-nav back'>CADASTRAR</li></Link>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
