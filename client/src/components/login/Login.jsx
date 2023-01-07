import React from 'react'
import './login.css'

export default function Login() {
    return (
        <div className='login'>
            <h1>Login</h1>
                <form className='formLogin'>                            
                        <label>Nome</label>
                        <input type='text' id='textInput' className='loginInput' placeholder='Digite' autoFocus={true}/>
                        <label>Email</label>
                        <input type='email' id='emailInput' className='loginInput' placeholder='Digite' autoFocus={true}/>
                        <label>Senha</label>
                        <input type='password' id='passwordInput' className='loginInput' placeholder='Digite' autoFocus={true}/>   
                </form>
                <button className='loginSubmit'>Enviar</button>  
        </div>
    )
}
