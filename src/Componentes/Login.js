
import React, { useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const login= {
    username: email,
    password: password
  };

  const register= {
    username: email,
    password: password,
    email: email
  };

  const notifySucesso = (message) => {
    toast.success(message);
  };

  const notifyErro = (message) => {
    toast.error(message);
  };

  const postDataLogin = async () => {
    try {
      // Lógica para fazer a requisição
      const response = await fetch('http://localhost:3000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({login})
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer a requisição');
      }

      const data = await response.json();
      console.log('Resposta da API:', data);
      // Faça algo com os dados recebidos, se necessário

      // Exibir notificação de sucesso
      notifySucesso(JSON.stringify(data), 'success');
    } catch (error) {
      console.error('Erro:', error);

      // Exibir notificação de erro
      notifyErro('Erro ao fazer a requisição: ' + error.message, 'error');
    }
  };

  const postDataRegister = async () => {
    try {
      // Lógica para fazer a requisição
      const response = await fetch('http://localhost:3000/api/v1/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({register})
      });

      if (!response.ok) {
        throw new Error('Erro ao fazer a requisição');
      }

      const data = await response.json();
      console.log('Resposta da API:', data);
      // Faça algo com os dados recebidos, se necessário

      // Exibir notificação de sucesso
      notifySucesso(JSON.stringify(data), 'success');
    } catch (error) {
      console.error('Erro:', error);

      // Exibir notificação de erro
      notifyErro('Erro ao fazer a requisição: ' + error.message, 'error');
    }
  };

  return (
    <div className="Container">
      <div className="ContainerEsquerdo">
      <h2>Bem Vindo</h2>
      <div className="form-floating mb-3">
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleEmailChange} required style={{ height: '90px', fontSize: '30px'}} />
        <label htmlFor="floatingInput" style={{ color: 'blue' }}>Email address</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={handlePasswordChange} required  style={{ height: '90px', fontSize: '30px' }} />
        <label htmlFor="floatingPassword" style={{ color: 'blue' }}>Password</label>
      </div>
      <button onClick={postDataLogin} id="meuBotaoLogin" type="button" class="btn btn-primary btn-lg" style={{ marginTop : '20px' }} >Login</button>
      <button onClick={postDataRegister} id="meuBotao" type="button" class="btn btn-primary btn-lg" style={{ marginTop : '20px', marginLeft: '50px' }}>Cadastrar
      </button>
      <ToastContainer />
      </div>
      <div id="liveAlertPlaceholder"></div>
    </div>
    
  );

};

export default Login;
