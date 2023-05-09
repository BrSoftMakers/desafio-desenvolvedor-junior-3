import { useEffect, useState } from 'react'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import apiFetch from '../axios/config'

const Register = () => {
  const navegate = useNavigate()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmpassword, setConfirmpassword] = useState()
  const [formMsg, setFormMsg] = useState([])

  function userLogged() {
    if (localStorage.getItem('token') !== null) { //se logado
      navegate('/blog')
    }
  }

  useEffect(() => {
    userLogged()
  }, [])

  function wait(time) {
    return new Promise(resolve => {
      setTimeout(resolve, time)
    })
  }

  const createAccount = async (e) => {
    e.preventDefault();
    setFormMsg("")

    //validar campos
    if (name.length < 3) {
      setFormMsg("O nome deve ter no mínimo 3 caracteres")
      return
    }
    if (email.length < 5) {
      setFormMsg("O email deve ter no mínimo 5 caracteres")
      return
    }
    if (password.length < 5) {
      setFormMsg("A senha deve ter no mínimo 5 caracteres")
      return
    }
    if (password != confirmpassword) {
      setFormMsg("A confirmação da senha está diferente")
      return
    }

    await apiFetch.post('/auth/register', {
      name: name,
      email: email,
      password: password,
      confirmpassword: confirmpassword
    }).then(async (response) => {
      setFormMsg(response.data.msg)
      await wait(4000)
      navegate('/')
    }).catch((error) => {
      setFormMsg(error.response.data.msg)
    })
  }


  return (
    <div className="register">
      <div className='logo'>
        <h1 className='logo-title1'>Blog</h1>
        <h1 className='logo-title2'>Luís Araújo</h1>
        <h1 className='logo-title3'>Desafio SoftMakers</h1>
      </div>
      <form onSubmit={(e) => createAccount(e)}>
        <h2>Registrar</h2>
        <div className="form-control">
          <label htmlFor='name'>Nome:</label>
          <input required type="name" name='name' id='name' placeholder='Digite seu nome' onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor='email'>E-mail:</label>
          <input required type="email" name='email' id='email' placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor='password'>Senha:</label>
          <input required type="password" name='password' id='password' placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor='confirmpassword'>Repetir a senha:</label>
          <input required type="password" name='confirmpassword' id='confirmpassword' placeholder='Confirme sua senha' onChange={(e) => setConfirmpassword(e.target.value)} />
        </div>
        <div className="form-control form-msg">
          {formMsg.length === 0 ? (<h4></h4>) : (<h4>{formMsg}</h4>)}
        </div>
        <div className="menu">
          <input type="submit" value="Cadastrar" className='btn' />
          <p>Já tem uma conta?</p>
          <Link to={'/'} className='btn'>Fazer login</Link>
        </div>
      </form>
    </div>
  )
}

export default Register