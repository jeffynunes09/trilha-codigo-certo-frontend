import logo from '../assets/logo.png'

import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar (){

    return( 
        <nav className='nav'>
        <a href="#"><img  id='logo' src={logo} alt="" /></a>
          <ul className='container-items-nav'>
           <Link to='/'> <li className='items-nav'>HOME</li></Link>
           <Link to='/projetos'> <li className='items-nav'>PROJETOS</li></Link>
           <Link to='/login'> <li className='items-nav back'>LOGIN</li></Link>
            </ul>
        </nav>

    )
}   

export default Navbar
   
   
// <Link to="/newproject">Novo Projeto</Link>