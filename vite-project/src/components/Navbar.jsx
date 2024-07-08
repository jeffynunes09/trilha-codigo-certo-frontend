import logo from '../assets/logo.png'
import './Navbar.css'
function Navbar (){

    return( 
        <nav className='nav'>
        <a href="#"><img  id='logo' src={logo} alt="" /></a>
          <ul className='container-items-nav'>
            <li className='items-nav'>HOME</li>
            <li className='items-nav'>PROJETOS</li>
            <li className='items-nav back'>LOGIN</li>
            </ul>
        </nav>

    )
}   

export default Navbar
   
   
// <Link to="/newproject">Novo Projeto</Link>