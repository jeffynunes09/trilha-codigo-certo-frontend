import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import api from './api';
import Cookies from 'js-cookie';
import { UserContext } from '../context/UserContext';
import Error from '../components/Error';
function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [nameError, setNameError] = useState(false);

  // Função para lidar com a submissão do formulário
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário

    
    setEmailError(!email);
    setPasswordError(!password);
    setNameError(!name);



    if (!email || !password || !name) {
      console.error('Nome, email e senha são obrigatórios');
   
      return;
    }

    try {
      const response = await api.post('/user/create', { email, password, name });
      console.log('Resposta da API:', response.data);
      const { token, user } = response.data;

      // Armazena o token no cookie
      Cookies.set('token', token, { expires: 7 });

      // Atualiza o estado do usuário no contexto
      setUser(user);

      console.log('Usuário criado com sucesso');
      navigate('/login');
    } catch (error) {
      console.error('Erro ao realizar cadastro:', error);
      alert('Erro ao realizar cadastro')
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='container-form'>
        <h2>CADASTRAR</h2>
        <div>
          <input
            onChange={(e) => {
              setName(e.target.value);
              setNameError(false);
            }}
            placeholder='DIGITE O SEU NOME'
            className='input'
            type='text'
            name='nome'
            id='nome'
          />
           {nameError && <Error message="O nome é obrigatório!" />}
        </div>
        <div>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
              setEmailError(false)
            }}
            placeholder='DIGITE O SEU EMAIL'
            className='input'
            type='text'
            name='email'
            id='email'
          />
           {emailError && <Error message="O email é obrigatório!" />}
        </div>
        <div>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
              setPasswordError(false)
            }}
            placeholder='DIGITE A SUA SENHA'
            className='input'
            type='password'
            name='password'
            id='password'
          />
           {passwordError && <Error message="A senha é obrigatória!" />}
        </div>
        <div className='container-button'>
          <button className='submit' type='submit'>Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
