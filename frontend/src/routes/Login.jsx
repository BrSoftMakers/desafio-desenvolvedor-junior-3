import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import apiFetch from '../axios/config'

const Login = () => {
    const navegate = useNavigate()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [formMsg, setFormMsg] = useState([])

    function userLogged() {
        if (localStorage.getItem('token') !== null) { //se logado
            navegate('/blog')
        }
    }

    useEffect(() => {
        userLogged()
    }, [])

    const sendLogin = async (e) => {
        e.preventDefault();
        setFormMsg("")

        //validar campos
        if (email.length < 5) {
            setFormMsg("O email deve ter no mínimo 5 caracteres")
            return
        }
        if (password.length < 5) {
            setFormMsg("A senha deve ter no mínimo 5 caracteres")
            return
        }

        await apiFetch.post('/auth/login', {
            email: email,
            password: password
        }).then(async (response) => {
            localStorage.setItem('token', response.data.token)
            navegate('/blog')
        }).catch((error) => {
            setFormMsg(error.response.data.msg)
        })
    }

    return (
        <div className="login">
            <div className='logo'>
                <h1 className='logo-title1'>Blog</h1>
                <h1 className='logo-title2'>Luís Araújo</h1>
                <h1 className='logo-title3'>Desafio SoftMakers</h1>
            </div>

            <form onSubmit={(e) => sendLogin(e)}>
                <h2>Entrar</h2>
                <div className="form-control">
                    <label htmlFor='email'>E-mail:</label>
                    <input required type="email" name='email' id='email' placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-control">
                    <label htmlFor='password'>Senha:</label>
                    <input required type="password" name='password' id='password' placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-control form-msg">
                    {formMsg.length === 0 ? (<h4></h4>) : (<h4>{formMsg}</h4>)}
                </div>
                <div className="menu">
                    <input type="submit" value="Entrar" className='btn' />
                    <p>Não tem uma conta?</p>
                    <Link to={'/register'} className='btn'>Criar conta</Link>

                </div>
            </form>
        </div>
    )
}

export default Login