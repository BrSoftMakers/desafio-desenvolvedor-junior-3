import { useAuthentication } from "../../hooks/useAuthentication";
import styles from "./Register.module.css";
import { useState, useEffect } from "react";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [comfirmPassword, setComfirmPassword] = useState("");
  const [error, setError] = useState("");


  const {createUser, error: authError, loading} = useAuthentication();



  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if (password !== comfirmPassword) {
      setError("Senhas precisam ser iguais. ")
      return
    }

    const res = await createUser(user)

    console.log(res)
  };

  useEffect(() => {
    if (authError) {
      setError(authError)
    }
  }, [authError])

  return (
    <div className={styles.register}>
      <h1>Cadastre-se</h1>
      <p>Crie seu usuário e faça parte da comunidade.</p>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="displayName"
            required
            placeholder="Nome do usuário "
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail do usuário "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name="password" 
            required
            placeholder="Insira sua senha "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirme sua Senha:</span>
          <input
            type="password"
            name="ConfirmPassword"
            required
            placeholder="Confirme sua senha "
            value={comfirmPassword}
            onChange={(e) => setComfirmPassword(e.target.value)}
          />
        </label>
        {!loading && <button className="btn">Cadastrar</button>}
        {loading && <button className="btn" disabled>Aguarde...</button>}
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
