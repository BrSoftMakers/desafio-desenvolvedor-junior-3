/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Container2 } from './styles';
import { Link } from 'react-router-dom'
import { BsPencil, BsTrash } from 'react-icons/bs'
import api from "../../services/api"
import { toast } from 'react-toastify'
import { useState, useEffect } from 'react';
import { useContext } from "react"
import { PostContext } from "../../provider/post"
import { useNavigate } from "react-router-dom";
import { Button } from "../Button"
import { BlogInterface } from '../../interfaces/Blog';

export function Blogs() {
  const { post, setPost } = useContext(PostContext)
  const [filter, setFilter] = useState<BlogInterface[]>([post])
  const navigate = useNavigate();

  function blogDate() {
    api.get(`posts`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => {


      setFilter(res.data)
    })
      .catch((err) => console.log(err))
  }

  function removeBlog(blog_id: any) {

    api.delete(`posts/${blog_id}`, {

      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }).then((res) => {
      blogDate()
      toast.success("Post deletado com sucesso!")
    }).catch((error) => {
      console.log(error)
      toast.error("Post não foi deletado, por favor tente novamente mais tarde")
    })
  }

  function render(item: object) {
    setPost(item)
    navigate("/blog-info")
  }

  function updateBlog(item: object) {
    setPost(item)
    navigate("/update-blog")
  }

  function All() {
    blogDate()
  }

  function My() {
    const my = filter.filter((item) => {
      return item.user?.id === localStorage.getItem('user_id')
    })
    setFilter(my)
  }
  useEffect(() => {
    blogDate()
  }, [])

  return (
    <>
      <Container>
        <div className="search">
          <div className="buttonAll">
            <Button onClick={All} size={false} whiteSchema={true}>Todos os Blogs</Button>
          </div>
          <Button onClick={My} size={false} whiteSchema={false}>Meus Blogs</Button>
        </div>
        <div className='container'>
          {filter.map((item) => (
            <Container2 imgUrl={item.img}>
              {item.user?.id === localStorage.getItem('user_id') ?
                <div className='item'>

                  <BsPencil onClick={() => updateBlog(item)} /> <BsTrash onClick={() => removeBlog(item.id)} />
                  <a>
                    <div className="overlay">
                      <section>
                        <h1 onClick={() => render(item)}>{item.title}</h1>
                      </section>
                    </div>
                  </a>
                </div>
                :
                  <a>
                    <div className="overlay">
                      <section>
                        <h1 onClick={() => render(item)}>{item?.title}</h1>
                      </section>
                    </div>
                  </a>
              }


            </Container2>
          ))}
        </div>

      </Container>



    </>




  );
}
