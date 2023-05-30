import { useState } from "react"
import blogFetch from "../../axios/config";


const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = async (e) => {
      e.preventDefault()
      try{
            await blogFetch.post('/login', {
              email,
              password
          }).then(() => {
            alert('logado')
            window.location.assign("/home");
          })
          console.log('sucesso')
      }catch (err) {
        console.log(err)
      }

      Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = ""))
    };



    return(
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
    )
}

export default LoginForm;