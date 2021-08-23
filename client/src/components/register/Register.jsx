import React, {useState} from 'react'
import './register.css'
import axios from 'axios'

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('false');


    const handleSubmit = async (e)=>{
       e.preventDefault();
       try{
        const res = await axios.post('/auth/register', {
            username,
            email,
            password,
        });
        res.data && window.location.replace('/login')
        console.log(res)
       }catch(err){
        setError(true)
       }
        
    }

    return (
        <div className='register'>
            <h1>Registrar</h1>
                <form className='formRegister' onSubmit={handleSubmit}>                            
                        <label>Nome</label>
                        <input type='text' id='textInput' className='registerInput' placeholder='Digite' autoFocus={true} onChange={e=>setUsername(e.target.value)}/>
                        <label>Email</label>
                        <input type='email' id='emailInput' className='registerInput' placeholder='Digite' autoFocus={true}
                        onChange={e=>setEmail(e.target.value)}/>
                        <label>Senha</label>
                        <input type='password' id='passwordInput' className='registerInput' placeholder='Digite' autoFocus={true} onChange={e=>setPassword(e.target.value)}/>   
                </form>
                <button type='submit' className='registerSubmit'>
                    <a href='/login'>Enviar</a>    
                </button>  
        </div>
    )
}
