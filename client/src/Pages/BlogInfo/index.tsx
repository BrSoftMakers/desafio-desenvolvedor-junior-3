import {useContext, useState} from "react"
import { Button } from "../../components/Button"
import { PostContext } from "../../provider/post"
import {Container} from "./styles"
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
      created_at?:Date
      updated_at?:Date
    }
    
  }

export function BlogInfo(){
    
    const {post} = useContext(PostContext)
    const [postAll] = useState<Blog>(post)
    const navigate = useNavigate();
    function back(){
        navigate("/dashboard")
       }
    return(
        <Container>
            
            <img src={postAll.img}/>
            <Button onClick={back} whiteSchema={true}>Voltar</Button>
            <div className="user">
            <h1 className="name">{postAll.title}</h1>
            <h3>Criado por: {postAll.user?.name}</h3>
            <h3>Contato: {postAll.user?.email}</h3>
            <p>{postAll.post}</p>
            </div>
            
            
        </Container>
    )

}