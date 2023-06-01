import { useState } from "react";
import blogFetch from "../../axios/config";
import "./LoginForm.css";

const LoginForm = () => {
  // .then(() => {
  //   alert('logado')
  //   window.location.assign("/home");
  // })



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await blogFetch.post("/login", {
        email,
        password,
      });

      const {data} = response
      localStorage.setItem('blog:token', JSON.stringify(data))
      window.location.assign("/home")
      



    } catch (err) {
      console.log(err);
    }

    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
  };

  return (
    <form
      action="http://localhost:8000/login"
      method="post"
      className="loginForm"
    >
      <h1>Login</h1>

      <input
        type="email"
        placeholder="Email"
        id="email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        id="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" onClick={(e) => handleLogin(e)}>
        Sign in
      </button>

      <a href="/signup">Cadastre-se aqui</a>
    </form>
  );
};

export default LoginForm;
