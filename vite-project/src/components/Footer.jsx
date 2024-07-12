import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import './Footer.css'
function Footer() {
  return (
  <div className='end'>
      <footer id='footer'>
        <div><h3 id='copy'>Codigo Certo © 2024</h3></div>
        <div>
            <ul id='container-menu'>
               <Link to='https://github.com/jeffynunes09'> <li className='item-footer'><FaSquareGithub></FaSquareGithub></li></Link>
                <Link to='https://www.linkedin.com/in/jefferson-nunes-da-silva-dev/'><li className='item-footer'><FaLinkedin></FaLinkedin></li></Link>
              <Link to='https://www.instagram.com/jeffyndev/'> <li className='item-footer'><FaInstagram /></li></Link>
            </ul>
        </div>
      
    </footer>
  </div>
  )
}

export default Footer