import React from 'react'
import './topbar.css'

export default function TopBar() {
    return (
        <div className="top">
            <div className='topLeft'>
            <i className="topContact fab fa-facebook-square"></i>
            <i className="topContact fab fa-linkedin"></i>
            <i className="topContact fab fa-whatsapp-square"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListMenu'>
                        <a href="/" style={{textDecoration:"none" , color:"inherit"}}>Home</a>
                    </li>
                    <li className='topListMenu'>
                        <a href="/" style={{textDecoration:"none" , color:"inherit"}}>Contatos</a>
                    </li>
                    <li className='topListMenu'>
                        <a href="/write" style={{textDecoration:"none" , color:"inherit"}}>Escrever</a>
                    </li>
                    <li className='topListMenu'>
                        <a href="/login" style={{textDecoration:"none" , color:"inherit"}}>Login</a>
                    </li>
                    <li className='topListMenu'>
                        <a href="/register" style={{textDecoration:"none" , color:"inherit"}}>Registrar</a>
                    </li>
                </ul>
            </div>
            <div className='topRight'>
                <img className='topImageIcon' src="https://observatoriodocinema.uol.com.br/wp-content/uploads/2017/12/8-avatar.jpg" alt="imagem de login"/>
                <i class="topIconSearch fas fa-search"></i>
            </div>
        </div>
    )
}
