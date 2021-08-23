import React, { useState, useEffect } from 'react'
import Header from '../header/Header'
import Posts from './pages/posts/Posts'
import Category from './pages/category/Category'
import './home.css'
import axios from 'axios'

export default function Home() {
    const [posts, setPosts] = useState([]);//comecar com um array vazio, ainda não mandei buscar nada

    useEffect(()=>{//função usada para ser chamda antes do carregamento da áfina
        const fetchPosts = async ()=>{
            const res = await axios.get('/posts')
            setPosts(res.data)
        }
        fetchPosts()
    },[])

    return (
        <>
            <Header />
            <div className='home'>
                <Posts posts={posts}/>{/*enviando props*/}
                <Category />
            </div>
        </>
        
    )
}
