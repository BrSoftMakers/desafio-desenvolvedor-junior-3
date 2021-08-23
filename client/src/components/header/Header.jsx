import React from 'react'
import './header.css'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className='headerTitleFirst'>React & Node</span>
                <span className='headerTitleSecond'>Blog</span>
            </div>
            <img className='imgHeaderImg' src='https://images.squarespace-cdn.com/content/v1/5a52cb30a9db097c5f8563fe/1515699505339-FE89KWNSDYBTKKXCDD6Q/typewriter%2Bbackground.jpg?format=2500w' alt=''/>
        </div>
    )
}
