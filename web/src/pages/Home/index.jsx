import React, { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistrationForm, setIsRegistrationForm] = useState(false);
  return (
    <section>
      <div />
      <div>
        <h2>{isRegistrationForm ? "Cadastro" : "Login"}</h2>
        <form>
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
            onClick={() => setIsRegistrationForm(!isRegistrationForm)}
          >
            {isRegistrationForm
              ? "Já tem conta? Acesse."
              : "Não tem conta? Cadastre-se."}
          </button>

          <button type="submit">
            {isRegistrationForm ? "Cadastrar" : "Acessar"}
          </button>
        </form>
      </div>
    </section>
  );
}
