import { useEffect, useState } from 'react'
import apiFetch from '../axios/config'
import { Link, useNavigate } from 'react-router-dom'
import { decodeToken } from 'react-jwt'
import './Home.css'

const Home = () => {
    const navegate = useNavigate()
    const [posts, setPosts] = useState([])
    const [onlyMine, setOnlyMine] = useState(false)
    const [asc, setAsc] = useState(false)
    const [textBtnOnlyMine, setTextBtnOnlyMine] = useState("Ver As Minhas")
    const [textBtnAsc, setTextBtnAsc] = useState("Ver Antigas Primeiro")

    const token = localStorage.getItem('token')

    function userLogged() {
        if (token === null) { //se não logado
            navegate('/')
        }
    }

    const getPosts = async () => {
        const response = await apiFetch.get('/posts', {
            params: {
                onlyMine: onlyMine,
                asc: asc
            },
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then().catch((error) => {
            console.log(error.response.data)
        })

        const data = response.data.msg
        setPosts(data)
    }

    const changeOnlyMine = () => {
        textBtnOnlyMine === "Ver As Minhas" ? setTextBtnOnlyMine("Ver Todas") : setTextBtnOnlyMine("Ver As Minhas")
        setOnlyMine(!onlyMine)
    }
    const changeAsc = () => {
        textBtnAsc === "Ver Antigas Primeiro" ? setTextBtnAsc("Ver Recentes Primeiro") : setTextBtnAsc("Ver Antigas Primeiro")
        setAsc(!asc)
    }

    useEffect(() => {
        userLogged()
        getPosts()
    }, [onlyMine, asc])

    return (
        <>
            <div className="home">
                <h1>Últimas postagens</h1>
                <p className='menu-home'>
                    <span>Filtros:</span>
                    <button className='btn btn-warning' onClick={() => changeOnlyMine()}>{textBtnOnlyMine}</button>
                    <button className='btn btn-warning' onClick={() => changeAsc()}>{textBtnAsc}</button>
                </p>
                {posts.length === 0 ? (<p>Nenhuma postagem a exibir...</p>) : (
                    posts.map((post) => (
                        <div className="post" key={post.id}>
                            <h2>{post.title}</h2>
                            <p className='post-content'>{(post.content).slice(0, 250)} [...]</p>
                            <p>Autor: {post.user.name}{decodeToken(token).id == post.userId ? (<> - (Minha Postagem)</>) : (<></>)}</p>
                            <p>Criado em: {post.createdAt}</p>
                            <p>Última alteração: {post.updatedAt}</p>
                            <p>Categoria: {post.categoryName}</p>
                            <div>
                                <Link to={`/posts/${post.id}`} className='btn'>Ler mais...</Link>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}

export default Home