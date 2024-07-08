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
                <li className='item-footer'><FaSquareGithub></FaSquareGithub></li>
                <li className='item-footer'><FaLinkedin></FaLinkedin></li>
                <li className='item-footer'><FaInstagram /></li>
            </ul>
        </div>
      
    </footer>
  </div>
  )
}

export default Footer