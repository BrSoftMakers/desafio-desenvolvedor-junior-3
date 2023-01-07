import React from 'react'
import './write.css'

export default function Write() {
    return (
        <div className='write'>
            <img className='imgWrite' src='http://www.osmais.com/wallpapers/201607/paisagem-dourada-wallpaper.jpg' alt=''/>
             <form className='formWrite'>
                <div className='writeFormGroup'>
                    <label htmlFor='fileInput'>
                        <i class="fileInputIcon far fa-plus-square"></i>
                    </label>
                    <input type='file' id='fileInput' className='fileInput' style={{display:'none'}}/>
                    <input type='text' id='titleInput' className='titleInput' placeholder='Título' autoFocus={true}/>
                </div>
                <div className='writeFormGroup'>
                    <textarea placeholder='Escreva aqui...' type='text' className='writeFormTextArea' autoFocus={true}></textarea>
                </div>
                <button className="writeSubmit">Publicar</button>
             </form>
        </div>
    )
}
