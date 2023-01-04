import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../lib/api";
import * as S from "./style";

export default function Home() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistrationForm, setIsRegistrationForm] = useState(false);
  const [deniedUser, setDeniedUser] = useState(false);
  const navigate = useNavigate();

  const onSubmitForm = async () => {
    try {
      const { data } = await api.post(
        isRegistrationForm ? "/register" : "/login",
        isRegistrationForm
          ? { username, password, name }
          : { username, password }
      );
      const token = JSON.stringify(data);
      localStorage.setItem("SMtoken", token);
      navigate("/blog");
    } catch (error) {
      setDeniedUser(true);
    }
  };
  return (
    <S.Container>
      <div className="content">
        <img
          src="https://vagas.softmakers.com.br/assets/img/logotipo14xxhdpi.png"
          alt="logo"
        />
        <h1>
          Transformamos negócios no presente para as oportunidades do futuro.
        </h1>
        <p>
          Concebemos soluções através de uma cultura de inovação, envolvendo
          todos os interessados no sucesso dos negócios.
        </p>
      </div>
      <S.FormContainer className={isRegistrationForm ? "scale" : ""}>
        <h2>{isRegistrationForm ? "Cadastro" : "Login"}</h2>
        <S.Form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmitForm();
          }}
        >
          <input
            type="text"
            placeholder="usuário"
            onChange={({ target }) => setUsername(target.value)}
            minLength={3}
            required
          />
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              placeholder="senha"
              onChange={({ target }) => setPassword(target.value)}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              required
            />
            <span>
              sua senha deve ser alfanumérica contendo 8 caracteres sendo um
              deles maiúsculo
            </span>
          </label>
          {isRegistrationForm && (
            <input
              type="text"
              placeholder="nome"
              onChange={({ target }) => setName(target.value)}
              minLength={2}
            />
          )}
          <button
            type="button"
            className="link"
            onClick={() => {
              setIsRegistrationForm(!isRegistrationForm);
              setDeniedUser(false);
            }}
          >
            {isRegistrationForm
              ? "Já tem conta? Acesse."
              : "Não tem conta? Cadastre-se."}
          </button>

          <button type="submit" className="submit">
            {isRegistrationForm ? "Cadastrar" : "Acessar"}
          </button>
          {deniedUser && <p>usuário ou senha inválidos</p>}
        </S.Form>
      </S.FormContainer>
    </S.Container>
  );
}
