import { useState } from "react";
import "./LoginUser.css";
import blogFetch from "../../axios/config";

const LoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [error, setError] = useState (false)

  const handleLogin = async (e) => {
    e.preventDefault();

    //console.log(email, password);
    //console.log("login clicked");

/*     let data = {
        "email": email,
        "password": password
    } */



    try{
          await blogFetch.post('/login', {
            email,
            password
        })
        console.log('sucesso')
    }catch (err) {
      console.log(err)
    }

/*     alert('criado com sucesso') */


  };

  return (
    <>
      <div className="image"></div>
      <div className="formSide">
        <form action="http://localhost:8000/login" method="post">
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
          {/*  <p>{error}</p> */}
        </form>
      </div>
    </>
  );
};

export default LoginUser;
