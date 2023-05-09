import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import apiFetch from '../axios/config'
import { decodeToken } from 'react-jwt'
import './Post.css'

const Post = () => {
    const params = useParams()
    const postId = params.id
    const navegate = useNavigate()
    const [title, setTitle] = useState([])
    const [content, setContent] = useState([])
    const [createdAt, setCreatedAt] = useState([])
    const [updatedAt, setUpdatedAt] = useState([])
    const [userName, setUserName] = useState([])
    const [categoryName, setCategoryName] = useState([])
    const [userId, setUserId] = useState([])
    const [textButtonDelete, setTextButtonDelete] = useState("Apagar")

    const token = localStorage.getItem('token')

    function userLogged() {
        if (token === null) { //se não logado
            navegate('/')
        }
    }

    const getPost = async () => {
        const response = await apiFetch.get(`/posts/${postId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then().catch((error) => {
            console.log(error)
            console.log(error.response.data)
        })

        const data = response.data.msg
        setTitle(data.title)
        setContent(data.content)
        setCreatedAt(data.createdAt)
        setUpdatedAt(data.updatedAt)
        setUserName(data.user.name)
        setCategoryName(data.categoryName)
        setUserId(data.userId)

    }

    useEffect(() => {
        userLogged()
        getPost()
    }, [])

    const deletePost = async () => {
        //tem certeza que deseja apagar?
        if(textButtonDelete === "Apagar"){
            setTextButtonDelete("Tem certeza? Clique novamente.")
            return
        }

        await apiFetch.delete(`/posts/${postId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(()=>{
            navegate('/blog')
        }).catch((error) => {
            console.log(error)
            console.log(error.response.data)
        })

        console.log('dell')
    }

    return (
        <div className='post'>
            <h2>{title.length === 0 ? ('Carregando...') : (title)}</h2>
            <p>{content.length === 0 ? ('Carregando...') : (content)}</p>
            <div className="post-property">
                <h4>Autor: {content.userName === 0 ? ('Carregando...') : (userName)}</h4>
                <h4>Criado em: {createdAt.length === 0 ? ('Carregando...') : (createdAt)}</h4>
                <h4>Última alteração: {updatedAt.length === 0 ? ('Carregando...') : (updatedAt)}</h4>
                <h4>Categoria: {categoryName.length === 0 ? ('Carregando...') : (categoryName)}</h4>
            </div>
            <div className="menu-post">
                <Link to={'/blog'} className='btn'>Voltar</Link>
                {decodeToken(token).id == userId ? (<>
                    <Link to={`/editpost/${postId}`} className='btn btn-warning'>Editar</Link>
                    <button className="btn btn-danger" onClick={() => deletePost()}>{textButtonDelete}</button>
                </>) : (<></>)}
            </div>
        </div>
    )
}

export default Post