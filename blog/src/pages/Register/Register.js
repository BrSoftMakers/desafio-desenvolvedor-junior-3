import styles from './Register.module.css';
import { useState, useEffect } from 'react';

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se</h1>
      <p>Crie seu usuário e faça parte da comunidade.</p>
      <form action="">
        <label>
          <span>Nome:</span>
          <input type="text" name='displayName' required placeholder='Nome do usuário ' />
        </label>
        <label>
          <span>Email:</span>
          <input type="email" name='email' required placeholder='E-mail do usuário ' />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name='password' required placeholder='Insira sua senha ' />
        </label><label>
          <span>Confirme sua Senha:</span>
          <input type="password" name='ConfirmPassword' required placeholder='Confirme sua senha ' />
        </label>
        <button className='btn'>Cadastrar</button>
      </form>
    </div>
  )
};

export default Register;