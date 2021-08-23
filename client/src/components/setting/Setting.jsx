import React from 'react'
import './setting.css'
import Category from '../home/pages/category/Category'

export default function Setting() {
    return (
        <div className='settings'>
            <div className='settingPage'>
                <div className='settingTitle'>
                    <span className='settingTitleUpdate'>Adicione sua conta</span>
                    <span className='settingTitleDelete'>Delete conta</span>
                </div>
                <form className='settingsForm'>
                    <label>Foto do perfil</label>
                    <div className='settingsPP'>
                        <img className='settingImgPP' src='https://i1.wp.com/www.toppapeldeparede.com.br/wp-content/uploads/2021/02/wallpaper-4k.jpg?resize=576%2C1024&ssl=1' alt=''/>
                        <label htmlFor='fileInput'>
                            <i class="settingsPPIcon far fa-user"></i>
                        </label>
                        <input type='file' id='fileInput' style={{display:'none'}}/>
                    </div>
                    <div className='settingsLabels'>                      
                        <label>Nome</label>
                        <input type='text' id='textInput' className='settingsInput' placeholder='Digite' autoFocus={true}/>
                        <label>Email</label>
                        <input type='email' id='emailInput' className='settingsInput' placeholder='Digite' autoFocus={true}/>
                        <label>Senha</label>
                        <input type='password' id='passwordInput' className='settingsInput' placeholder='Digite' autoFocus={true}/>
                        <button className='settingsSubmit'>Enviar</button>
                    </div>
                    
                </form>
            </div>
                <Category />
        </div>
    )
}
