import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../apiClient';
import './login.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        email,
        password,
      };

      // Chamar a função loginUser do apiClient para fazer a chamada à API
      const response = await loginUser(userData);

      // Tratar a resposta da API de acordo com suas necessidades
      console.log('Login bem-sucedido:', response);
      navigate('/blog');
    } catch (error) {
      // Tratar erros de login
      console.error('Erro no login:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={ handleLogin }>
        <input
          type="email"
          placeholder="Email"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
        />
        <input
          type="password"
          placeholder="Senha"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
