import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import {Formik,Form} from "formik"
import api from "../../services/api"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'
import { useContext } from "react";
import { AuthContext } from "../../provider/auth";

interface inputLogin{
    email:string
    password:string
}

export function Login(){

    const schema = yup.object().shape({
        email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
        password: yup.string().required('Senha é obrigatória')
    })
    const {auth,setAuth} = useContext(AuthContext)
    
    const initialValues : inputLogin = {email: "",password:""}
    const navigate = useNavigate();
    const submit = (data: object) => {
        api.post(`/login`,data).then((res) => {
            setAuth(true)
            console.log(auth,'login')
            const { token, user_id } = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user_id", user_id)
            
            toast.success("Login efetuado com sucesso")
            navigate("/dashboard")
        })
        .catch((err) =>{
            toast.error("Email ou senha invalidos")
            console.log(err)
        })
    }
    return(
        <Container>
           
            <Formik 
                validationSchema={schema}
                initialValues={initialValues}
                onSubmit={submit}
            >
                {({errors}) => (
                    <Form>
                    <h1>Login</h1>
                            <Input
                                label="E-mail"
                                type="text"
                                placeholder="Digite seu E-mail"
                                name="email"
                                error={errors.email}
                           />
                            
                            <Input
                                label="Senha"
                                type="password"
                                placeholder="Digite sua Senha"
                                name="password"
                                error={errors.password}
                            />
                            <div className="cont">
                            <h4>Ainda não possui conta?</h4>
                            <a href="/register">Cadastre-se</a>
                            </div>
                             
                            <Button whiteSchema={false}>Entrar</Button>
                    </Form>
                )}
                
            </Formik>
        </Container>
    )
}