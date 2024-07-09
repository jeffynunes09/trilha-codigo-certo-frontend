import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div>
        <form action="">
            <div>
            <label htmlFor="">email</label>
            <input type="text" name="" id="" />
            </div>
            <div>
            <label htmlFor="">senha</label>
            <input type="password" name="" id="" />
            </div>
            <Link to='/'><button type='submit'>enviar</button></Link>
        </form>
    </div>
  )
}

export default Login