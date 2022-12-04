/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from './styles';
import { Link } from 'react-router-dom'
import { BsPencil, BsTrash } from 'react-icons/bs'
import api from "../../services/api"
import { toast } from 'react-toastify'
import { useState,useEffect } from 'react';
import { useContext } from "react"
import { PostContext } from "../../provider/post"
import { useNavigate } from "react-router-dom";

type Blog = {
  id?:string
  title?:string
  post?:string
  img?:string
  created_at?:string
  updated_at?:string
  user?:{
    id?:string
    name?:string
    email?:string
    img?:string
    created_at?:string
    updated_at?:string
  }
  
}

export function Blogs() {
  const [blog,setBlog] = useState<Blog[]>([])
  const {post,setPost} = useContext(PostContext)
  const navigate = useNavigate();
  function blogDate(){
    api.get(`posts`, {
        headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then((res) => {
      
          
          setBlog(res.data)
    })
    .catch((err) => console.log(err))
}

function removeBlog(blog_id: any){
        
  api.delete(`posts/${blog_id}`,{

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

function render(item:object){
  setPost(item)
  navigate("/blog-info")
 }

  useEffect(() => {
    blogDate()
},[])

  return (


    <>
    {blog.map((item) => (
      <Container onClick={() => render(item)} imgUrl={item.img}>
        
        {item.user?.id === localStorage.getItem('user_id') ?
            <div>
              
                    <BsPencil/> <BsTrash onClick={() => removeBlog(item.id)}/>
                      <a >
                      <a>
                        
                        <div className="overlay">
                          
                      <section>
                       <h1>{item.title}</h1>
                         </section>
                     </div>
              </a>
                      
            </a>
            </div>
            :
            <a >
            <a>
            <div className="overlay">
            <section>
              <h1>{item?.title}</h1>
              </section>
          </div>
            </a>
            
          </a>

      }
      </Container>
    ))}
    </>
   

   
   
  );
}
