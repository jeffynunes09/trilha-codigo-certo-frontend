import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
function Login() {
  return (
    <div> 
        <form  className='container-form' action="">
           <h2>
            ENTRAR
           </h2>
            <div className=''>
          
            <input placeholder=' DIGITE O SEU EMAIL' className ='input' type="text" name="" id="" />
            </div>
            
            <div>
           
            <input placeholder=' DIGITE A SUA SENHA' className ='input' type="password" name="" id="" />
            </div>
            <p className='signup'>Crie sua conta</p>
            <div className='container-button'>
            <Link to='/'><button className='submit' type='submit'>enviar</button></Link>
            </div>
        </form>
    </div>
  )
}

export default Login