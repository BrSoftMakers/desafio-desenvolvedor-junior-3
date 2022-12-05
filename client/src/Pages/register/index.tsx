import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Formik, Form } from "formik"
import api from "../../services/api"
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
import * as yup from 'yup'
import { inputRegistration } from "../../interfaces/Input";

export function Register() {
    const schema = yup.object().shape({
        name: yup.string().required('Nome é obrigatório'),
        email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
        password: yup.string().required('Senha é obrigatória')
    })

    const initialValues: inputRegistration = { email: "", password: "", name: "" }
    const navigate = useNavigate();
    const submit = (data: object) => {
        api.post(`/register`, data).then((res) => {
            toast.success("Usuario cadastrado com sucesso")
            navigate("/")
        })
            .catch((err) => {
                toast.error("Não foi possivel cadastrar usuario, tente novamente mais tarde")
                console.log(err)
            })
    }

    function out() {
        navigate("/")
    }
    return (

        <Container>
            <div className="buttonSair">
                <Button size={true} onClick={out} whiteSchema={true}>Voltar</Button>
            </div>

            <Formik
                validationSchema={schema}
                initialValues={initialValues}
                onSubmit={submit}
            >
                {({ errors }) => (
                    <Form>
                        <h1>Cadastrar Usuario</h1>
                        <Input
                            label="Nome"
                            type="text"
                            placeholder="Digite seu Nome Completo"
                            name="name"
                            error={errors.name}
                        />
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
                        <Button size={true} whiteSchema={false}>Entrar</Button>
                    </Form>
                )}

            </Formik>
        </Container>
    )
}