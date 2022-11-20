import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestRegister } from './helpers/requestFunctions';
import { saveData } from './helpers/storageFunctions';

function Register() {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const validate = () => {
    const { name, email, password } = user;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const minLength = 5;
    const status =
      name.length > minLength &&
      password.length > minLength &&
      emailRegex.test(email);
    return !status;
  };

  const registerClick = async () =>
    requestRegister(user)
      .then(({ data }) => {
        saveData('user', data);
        navigate('/posts');
      })
      .catch((error) => {
        alert(error.response.data.message);
      });

  return (
    <div className="container">
      <form className="border border-5d-flex p-5 bg-secondary bg-opacity-10 bg-gradient flex-column align-items-center position-absolute top-50 start-50 translate-middle">
        <div className="mb-3">
          <input
            className="form-control text-center"
            name="name"
            type="text"
            placeholder="Seu Nome"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control text-center"
            name="email"
            type="email"
            placeholder="seu-email@site.com.br"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control text-center"
            name="password"
            type="password"
            placeholder="*********"
            onChange={handleChange}
          />
        </div>
        <div className="d-grid gap-2">
          <button
            className="btn btn-success"
            disabled={validate()}
            type="button"
            onClick={registerClick}
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
