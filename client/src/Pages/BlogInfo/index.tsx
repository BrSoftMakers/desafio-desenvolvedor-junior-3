import { useContext, useState } from "react"
import { Button } from "../../components/Button"
import { PostContext } from "../../provider/post"
import { Container } from "./styles"
import { useNavigate } from "react-router-dom";
import { BlogInterface } from "../../interfaces/Blog";

export function BlogInfo() {

  const { post } = useContext(PostContext)
  const [postAll] = useState<BlogInterface>(post)
  const navigate = useNavigate();
  function back() {
    navigate("/dashboard")
  }
  return (
    <Container>
      
      {postAll.img ?
        <><img src={postAll.img} onClick={back} />
        
        <div className="user">
        
          <h1 className="name">{postAll.title}</h1>
          <h3>Criado por: {postAll.user?.name}</h3>
          <h3>Contato: {postAll.user?.email}</h3>
          <p className="text">{postAll.post}</p>
        </div></>
        :
        <><img src="red" /><Button size={true} onClick={back} whiteSchema={true}>Voltar</Button><div className="user">
          <h1 className="name">{postAll.title}</h1>
          <h3>Criado por: {postAll.user?.name}</h3>
          <h3>Contato: {postAll.user?.email}</h3>
          <p>{postAll.post}</p>
        </div></>
      }
    </Container>
  )

}