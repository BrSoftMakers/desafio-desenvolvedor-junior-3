import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {Formik,Form, Field} from "formik"
import api from "../../services/api"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'
interface inputRegistration{
    title:string
    post:string
    img:string
}

export function Blog(){
    const schema = yup.object().shape({
        title: yup.string().required('Titulo é obrigatório'),
        post: yup.string().required('Post é obrigatório')
    })
    
    const initialValues : inputRegistration = {title:"",img:"",post:""}
    const navigate = useNavigate();
    const submit = (data: object) => {
        api.post(`posts`,data, {
            headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            toast.success("Post cadastrado com sucesso")
                navigate("/dashboard")
              
              
        })
        .catch((err) => {
            toast.error("Não foi possivel criar um post, tente novamente mais tarde")
            console.log(err)
        
    })
}
   

    function out(){
        navigate("/dashboard")
    }
    return(

        <Container>
            <div className="buttonSair">
                <Button onClick={out} whiteSchema={true}>Sair</Button>
            </div>
           
            <Formik 
                validationSchema={schema}
                initialValues={initialValues}
                onSubmit={submit}
            >
                {({errors}) => (
                    <Form>
                    <h1>Criar Blog</h1>
                            <Input
                                label="Titulo"
                                type="text"
                                placeholder="Digite o titulo do blog"
                                name="title"
                                error={errors.title}
                           />
                            <Input
                                label="Link da Imagem"
                                type="text"
                                placeholder="Digite o link da imagem"
                                name="img"
                                error=""
                           />
                           <div className="lab">
                          
                           <label className="label">Post</label>
                           <span className="span">{errors.post}</span>
                           </div>
                           
            
                          <Field className="text" as="textarea" name="post"/>
                            
                            <Button whiteSchema={false}>Entrar</Button>
                    </Form>
                )}
                
            </Formik>
        </Container>
    )
}