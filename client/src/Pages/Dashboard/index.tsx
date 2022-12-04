import { Container } from "./styles";
import {Blogs} from "../../components/Blog";
import api from "../../services/api";
import React, {  useState,useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import {AuthContext} from "../../provider/auth"


type User = {
    id?:string
    name?:string
    email?:string
    img?:string
    created_at?:string
    updated_at?:string
}

export function Dashboard(){
    const [user,setUser] = useState<User>()
    
    const [letter,setLetter] = useState()
    const {auth,setAuth} = useContext(AuthContext)
    const navigate = useNavigate();
    
    function userDate(){
        api.get(`register/${localStorage.getItem('user_id')}`, {
            headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            setUser(res.data)
           
            const name = res.data.name.match(/\b(\w)/gi);
                if (name !== null && name !== undefined) {
                    const letter1 = name[0]
                    const letter2 = name[1]
                    
                        if(name.length > 1){
                            setLetter(letter1 + letter2)
                    }
                        else{
                            setLetter(letter1)
                    }
                
                
                }
        })
            .catch((err) => console.log(err))
    }

   function pageCreateBlog(){
    navigate("/blog")
   }
   
    function returnLogin(){
        localStorage.clear();
        setAuth(false)
        console.log(auth,"sair")
    }
    
    useEffect(() => {
        userDate()
     
    },[])

    
    return(
        <Container>
           
            <div className="buttonSair">
            <Button onClick={returnLogin} whiteSchema={true}>Sair</Button>
            
            </div>
            
           
           <div className="name">
           <div className="letter">
           {!user?.img ? <h1 className="letter2">{letter}</h1>  : <img src={user.img}/>}
            
            </div>
           <h1 className="nameAll">{user?.name}</h1>
           </div>
           <div className="buttonBlog">
           <Button onClick={pageCreateBlog} whiteSchema={false}>Criar Blog</Button>
           </div>
           
           <h2>Blogs</h2>
            <div className="blog">
            
           
                 <Blogs />

            </div>
            
        </Container>
    )
}