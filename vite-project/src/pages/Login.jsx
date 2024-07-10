import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import api from './api';
import Cookies from 'js-cookie';
import { UserContext } from '../context/UserContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser} = useContext(UserContext);
  const navigate = useNavigate();

  // Função para lidar com a submissão do formulário
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário

    if (!email || !password) {
      console.error('Email e senha são obrigatórios');
      return;
    }

    try {
      const response = await api.post('/user/login', { email, password });
      console.log('Resposta da API:', response.data);
      const { token, user } = response.data;

      // Armazena o token no cookie
      Cookies.set('token', token, { expires: 7 });

      // Atualiza o estado do usuário no contexto
      setUser(user);
     

      console.log('Login bem-sucedido');
      navigate('/');
    } catch (error) {
      console.error('Erro ao realizar login:', error);
    }
  };



  return (
    <div>
      <form onSubmit={handleSubmit} className='container-form'>
        <h2>ENTRAR</h2>
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder='DIGITE O SEU EMAIL'
            className='input'
            type='text'
            name='email'
            id='email'
          />
        </div>
        <div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder='DIGITE A SUA SENHA'
            className='input'
            type='password'
            name='password'
            id='password'
          />
        </div>
        <Link to='/signup'>
          <p className='signup'>Crie sua conta</p>
        </Link>
        <div className='container-button'>
          <button className='submit' type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
