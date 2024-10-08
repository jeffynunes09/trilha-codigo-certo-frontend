import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { UserContext } from '../context/UserContext';
import './Navbar.css';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate()
  function handleLogout() {
    Cookies.remove('token');
    setUser(null);
    setIsMobileMenuOpen(false); // Fecha o menu ao fazer logout
    navigate('/')
  }

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <nav className='nav'>
    <Link to='/'><img id='logo' src={logo} alt="Logo" /></Link>
      <div className="menu-toggle" id="mobile-menu" onClick={toggleMobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`container-items-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to='/' onClick={closeMobileMenu}><li className='items-nav'>HOME</li></Link>
        {user ? (
          <>
            <Link to='/projetos' onClick={closeMobileMenu}><li className='items-nav'>PROJETOS</li></Link>
           {isMobileMenuOpen ? '' :  <li className='items-nav'>Olá, {user.email}</li>}
            <li className='items-nav back' onClick={handleLogout}>LOGOUT</li>
          </>
        ) : (
          <>
            <Link to='/login' onClick={closeMobileMenu}><li className='items-nav back'>LOGIN</li></Link>
            <Link to='/signup' onClick={closeMobileMenu}><li className='items-nav back'>CADASTRAR</li></Link>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
