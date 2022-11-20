import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestLogin } from './helpers/requestFunctions';
import { saveData } from './helpers/storageFunctions';

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: '', password: '' });
  const [isDisable, setIsDisable] = useState(true);

  const validate = () => {
    const { email, password } = user;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const minLength = 5;
    const status = password.length > minLength && emailRegex.test(email);
    setIsDisable(!status);
  };

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const loginClick = async () =>
    requestLogin(user)
      .then(({ data }) => {
        saveData('user', data);
        navigate('/posts');
      })
      .catch((error) => {
        alert(error.response.data.message);
      });

  useEffect(() => {
    validate();
  });

  return (
    <div className="container">
      <form className="border border-5d-flex p-5 bg-secondary bg-opacity-10 bg-gradient flex-column align-items-center position-absolute top-50 start-50 translate-middle">
        <div className="mb-3">
          <input
            className="form-control text-center"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            type="email"
          />
        </div>

        <div className="mb-3">
          <input
            className="form-control text-center"
            placeholder="Senha"
            name="password"
            onChange={handleChange}
            type="password"
          />
        </div>

        <div className="d-grid gap-2">
          <button
            className="btn btn-success"
            disabled={isDisable}
            type="button"
            onClick={loginClick}
          >
            Login
          </button>

          <button
            className="btn btn-primary"
            type="button"
            onClick={() => navigate('/register')}
          >
            Ainda não tenho conta
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
