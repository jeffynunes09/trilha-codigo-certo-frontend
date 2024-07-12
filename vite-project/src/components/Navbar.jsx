import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { UserContext } from '../context/UserContext';
import './Navbar.css';
import Cookies from 'js-cookie';

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleLogout() {
    Cookies.remove('token');
    setUser(null);
    setIsMobileMenuOpen(false); // Fecha o menu ao fazer logout
  }

  function toggleMobileMenu() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <nav className='nav'>
      <a href="#"><img id='logo' src={logo} alt="Logo" /></a>
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
            <li className='items-nav'>Olá, {user.email}</li>
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
