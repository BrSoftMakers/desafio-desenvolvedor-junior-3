import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './singlePost.css'
import { useLocation } from 'react-router';

export default function singlePost() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation();//saber a locatização do obejto pela url
    const path = location.pathname.split('/')[2];//depois da barra, contar as rotas até chegar ao id da post:/post/54754 (0 = /, 1 = post e 2 = / ) resultado o ID aparece
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [post, setPost] = useState({})
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        const getPost = async()=>{
            const res = await axios.get('/posts/' + path);
            setPost(res.data)
        };
        getPost()
    },[path])
    return (
        <div className='singlePost'>
            <div className='singlePostControl'>
                {post.photo && (
                    <img src={post.photo} alt='' className='singlePostImage'/>
                )}
                
                <h1 className='singlePostControlTitle'>
                    {post.title}
                    <div className='singlePostControlEdit'>
                        <i class="singlePostControlEditIcon iconEdit far fa-edit"></i>
                        <i class="singlePostControlEditIcon iconDelete far fa-trash-alt"></i>
                    </div>
                </h1>
            </div>
            
            <div className='singlePostInfo'>
                <span className='singlePostAuthor'>Autor: <b>{post.username}</b></span>
                <span className='singlePostDate'>{new Date(post.createdAt).toDateString}</span>
            </div>
            <p className='singlePostTextPost'>
                    {post.desc}
                </p>
        </div>
    )
}
