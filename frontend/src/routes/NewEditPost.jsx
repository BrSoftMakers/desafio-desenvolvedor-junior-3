import apiFetch from '../axios/config'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import './NewEditPost.css'

const NewPost = () => {
    const params = useParams()
    const postId = params.id
    const navegate = useNavigate()
    const [title, setTitle] = useState()
    const [content, setContent] = useState()
    const [categoryId, setcategoryId] = useState()
    const [categories, setCategories] = useState([])
    const [formMsg, setFormMsg] = useState([])
    const token = localStorage.getItem('token')

    function userLogged() {
        if (localStorage.getItem('token') === null) { //se não logado
            navegate('/')
        }
    }

    const getPostsCategories = async () => {
        const response = await apiFetch.get('/posts-categories', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then().catch((error) => {
            console.log(error.response.data)
        })

        const data = response.data.msg

        setcategoryId(data[0].id)
        setCategories(data)
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
        setcategoryId(data.categoryId)
    }

    useEffect(() => {
        userLogged()
        getPostsCategories()

        if (postId != null) { //se editando post
            getPost()
        }
    }, [])

    const createPost = async (e) => {
        e.preventDefault();
        setFormMsg("")

        //validar campos
        if (title.length < 5) {
            setFormMsg("O título deve ter no mínimo 5 caracteres")
            return
        }
        if (content.length < 5) {
            setFormMsg("O conteúdo deve ter no mínimo 5 caracteres")
            return
        }

        await apiFetch.post('/posts', {
            title: title,
            content: content,
            categoryId: categoryId
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(() => {
            navegate('/')
        }).catch((error) => {
            console.log(error.response.data)
        })
    }

    const editPost = async (e) => {
        e.preventDefault();
        setFormMsg("")

        //validar campos
        if (title.length < 5) {
            setFormMsg("O título deve ter no mínimo 5 caracteres")
            return
        }
        if (content.length < 5) {
            setFormMsg("O conteúdo deve ter no mínimo 5 caracteres")
            return
        }

        await apiFetch.put(`/posts/${postId}`, {
            title: title,
            content: content,
            categoryId: categoryId
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(() => {
            navegate(`/posts/${postId}`)
        }).catch((error) => {
            console.log(error.response.data)
        })
    }

    return (
        <div className='new-post'>
            <h2>{postId == null ? (<>Adicionar nova postagem</>) : (<>Editar postagem</>)}</h2>

            <form onSubmit={postId == null ? (e) => createPost(e) : (e) => editPost(e)}>
                <div className="form-control">
                    <label htmlFor='title'>Título:</label>
                    <input required type="text" name='title' id='title' placeholder='Digite o título' onChange={(e) => setTitle(e.target.value)} value={title || ''} />
                </div>
                <div className="form-control">
                    <label htmlFor='content'>Conteúdo:</label>
                    <textarea required name='content' id='content' placeholder='Digite o conteúdo' rows={8} onChange={(e) => setContent(e.target.value)} value={content || ''}></textarea>
                </div>
                <div className="form-control">
                    <label htmlFor='content'>Categoria:</label>
                    <select name="categoryId" id="categoryId" value={categoryId} onChange={(e) => setcategoryId(e.target.value)}>
                        {categories.length === 0 ? (<option value="1">Carregando...</option>) : (
                            categories.map((category) => (
                                <option key={category.id} value={category.id} >{category.name}</option>
                            ))
                        )}
                    </select>
                </div>
                <div className="form-control form-msg">
                    {formMsg.length === 0 ? (<h4></h4>) : (<h4>{formMsg}</h4>)}
                </div>
                {postId == null ? (
                    <input type="submit" value="Cadastrar" className='btn btn-success' />
                ) : (
                    <input type="submit" value="Salvar" className='btn btn-success' />
                )}
                <Link to={postId == null ? `/blog` : `/posts/${postId}`} className='btn btn-danger'>Cancelar</Link>
            </form>
        </div>
    )
}

export default NewPost