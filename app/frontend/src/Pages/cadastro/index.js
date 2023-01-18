import React, { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { reqLogin } from '../../services/API';

import './cadastro.css';
import Change from '../../Components/switch';

export default function Cadastro() {
  const [credential, setCredential] = useState({
    email: '',
    password: '',
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const [failedRegister, setFailedToRegister] = useState(false);

  const { email, password } = credential;

  const register = async (event) => {
    event.preventDefault();
    try {
      await reqLogin('/register', { email, password });

      setIsRegister(true);
    } catch (err) {
      setFailedToRegister(true)
      setIsRegister(false);
    }
  }

  useEffect(() => {
    setFailedToRegister(false);
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

  if (isRegister) return <Navigate to="/login" />;

  return (
    <div className="body">
      <div className="login">
        <input
          className="input"
          type="email"
          name="email"
          id="email"
          data-testid="email-input"
          value={ email }
          placeholder="Diite seu E-mail"
          onChange={ handleChange }
        />

        <input
          className="input"
          type="password"
          name="password"
          id="password"
          data-testid="password-input"
          value={ password }
          placeholder="Diite sua senha"
          onChange={ handleChange }
        />
        {
          (failedRegister)
            ? (
              <p>
                {
                  `Os campos estao incorretos`
                }
              </p>
            ) : null
        }
        <button
          className='btn'
          type='button'
          data-testid='login-submit'
          disabled={ btnDisabled }
          onClick={ (event) => register(event) }
        >
          Cadastro
        </button>
        <Link to="/login">
          <Change title='Ja tem login ?' />
        </Link>
      </div>
    </div>
  )
}