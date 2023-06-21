import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../apiClient';
import './register.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register() {
  const navigate = useNavigate();
  const [displayName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userData = {
        displayName,
        email,
        password,
      };

      const createdUser = await createUser(userData);
      console.log('Usuário criado:', createdUser);
      navigate('/login');
      // Faça o que for necessário com os dados do usuário criado
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      // Trate o erro de acordo com suas necessidades
    }
  };

  return (
    <form onSubmit={ handleSubmit } className="main">

      <div className="container">
        <div className="inputs">
          <input
            type="text"
            value={ displayName }
            onChange={ handleNameChange }
            placeholder="Name"
            className="inputRegister inputName "
            required
          />

          <input
            type="email"
            value={ email }
            onChange={ handleEmailChange }
            placeholder="Email"
            className="inputRegister inputEmail "
            required
          />
          <input
            minLength={ 6 }
            type="password"
            value={ password }
            onChange={ handlePasswordChange }
            placeholder="Password"
            className="inputRegister inputPassword"
            required
          />
        </div>

        <button type="submit" className="buttonSubmit">Register</button>

      </div>
    </form>
  );
}
export default Register;
