import React, { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { reqLogin, setToken } from '../../services/API';

import './login.css';
import Change from '../../Components/switch';

export default function Login() {
  const [credential, setCredential] = useState({
    email: '',
    password: '',
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);

  const { email, password } = credential;

  const login = async (event) => {
    event.preventDefault();
    try {
      const { token } = await reqLogin('/login', { email, password });
      
      setToken(token);

      localStorage.setItem('token', token);
      localStorage.setItem('email', email);

      setIsLogged(true);
    } catch (err) {
      setFailedTryLogin(true)
      setIsLogged(false);
    }
  }

  useEffect(() => {
    setFailedTryLogin(false);
  }, [email, password]);

  useEffect(() => {
    const verify = () => {
      const reg = new RegExp(/^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i);
      const emailTest = reg.test(email);
      if (password.length >= 8 && emailTest) {
        setBtnDisabled(false);
      } else {
        setBtnDisabled(true);
      }
    }
    return verify();
  }, [email, password]);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setCredential({...credential, [name]: value });
  }

  if (isLogged) return <Navigate to="/posts" />;

  return (
    <div className="body">
      <div className="login">
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          value={ email }
          placeholder="Diite seu E-mail"
          onChange={ handleChange }
        />

        <input
          className="input"
          type="password"
          name="password"
          id="password"
          value={ password }
          placeholder="Diite sua senha"
          onChange={ handleChange }
        />
        {
          (failedTryLogin)
            ? (
              <p>
                {
                  `Email ou senha incorretos`
                }
              </p>
            ) : null
        }
        <button
          className='btn'
          type='button'
          data-testid='login-submit'
          disabled={ btnDisabled }
          onClick={ (event) => login(event) }
        >
          Login
        </button>
        <Link to="/register">
          <Change title='Cadastre-se' />
        </Link>
      </div>
    </div>
  )
}