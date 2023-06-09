import React, { useContext, useEffect, useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import MyContext from '../context/MyContext';
import '../styles/login.css';
import logo from '../images/logo.png';

function LoginForm() {
  const {
    handleChange, login,
    formsInfo, failedTryLogin,
    isLogged, isLoginDisabled,
    resetInputs,
  } = useContext(MyContext);

  const history = useHistory();
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    resetInputs();

    if (failedTryLogin) {
      setShowErrorMessage(true);

      const timer = setTimeout(() => {
        setShowErrorMessage(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [failedTryLogin, resetInputs]);

  const { loginEmailInput, loginPasswordInput } = formsInfo;

  if (isLogged) return <Redirect to="/posts" />;

  return (
    <main className="main-login">
      <section className="right-login">
        <div className="login_logo">
          <img src={logo} alt="logo imagem" />
        </div>
        <form className="card-login">
          <h1>Login</h1>
          <label htmlFor="email-input" className="text-field">
            <h4>Email:</h4>
            <input
              placeholder="exemplo@email.com"
              type="email"
              name="loginEmailInput"
              id="email-input"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password-input" className="text-field">
            <h4>Senha:</h4>
            <input
              placeholder="sua senha"
              type="password"
              name="loginPasswordInput"
              id="password-input"
              onChange={handleChange}
            />
          </label>
          {showErrorMessage && (
            <p>
              E-mail ou senha incorretos.
            </p>
          )}
          <button
            type="submit"
            disabled={isLoginDisabled}
            onClick={(event) =>
              login(event, {
                email: loginEmailInput,
                password: loginPasswordInput,
              })
            }
            className="btn-login"
          >
            LOGIN
          </button>
          <button
            type="button"
            id="register-btn"
            onClick={() => history.push('/register')}
            className="btn-register"
          >
            Ainda não tem cadastro?
          </button>
        </form>
      </section>
    </main>
  );
}

export default LoginForm;
