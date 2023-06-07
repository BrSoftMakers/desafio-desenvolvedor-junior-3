import React, { useContext, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import MyContext from '../context/MyContext';
import '../styles/login.css';
import logo from '../images/logo.png';

export default function RegisterForm() {
  const {
    handleChange, formsInfo,
    isRegisterDisabled, resetInputs,
    register, failedTryRegister, isLogged,
  } = useContext(MyContext);

  const history = useHistory();

  const dataUser = {
    name: formsInfo.registerNameInput,
    email: formsInfo.registerEmailInput,
    password: formsInfo.registerPasswordInput,
  };

  useEffect(() => {
    resetInputs();
  }, [resetInputs]);

  if (isLogged) return <Redirect to="/posts" />;

  return (
    <main className="main-login">
      <section className="right-login">
        <img src={ logo } alt="logo imagem" />
        <form className="card-login">
          <h1>Register</h1>
          <label htmlFor="name" className="text-field">
            <h4>Nome:</h4>
            <input
              type="text"
              name="registerNameInput"
              placeholder="Informe seu nome"
              onChange={ handleChange }
            />
          </label>

          <label htmlFor="email" className="text-field">
            <h4>Email:</h4>
            <input
              type="text"
              name="registerEmailInput"
              placeholder="Informe seu melhor email"
              onChange={ handleChange }
            />
          </label>

          <label htmlFor="password" className="text-field">
            <h4>Senha:</h4>
            <input
              type="password"
              name="registerPasswordInput"
              placeholder="Insira sua senha"
              onChange={ handleChange }
            />
          </label>

          {
            failedTryRegister && (
              <p>
                Email já Cadastrado!
              </p>
            )
          }

          <button
            className="btn-login"
            type="submit"
            disabled={ isRegisterDisabled }
            onClick={ (event) => register(event, dataUser) }
          >
            CADASTRAR
          </button>

          <button
            className="btn-register"
            type="submit"
            data-testid="common_register__button-register"
            onClick={ () => history.push('/login') }
          >
            Já tem cadastro?
          </button>

        </form>
      </section>
    </main>
  );
}