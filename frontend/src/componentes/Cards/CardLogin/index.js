import styled from "styled-components"
import { Titulo } from "../Titulo"

const Card = styled.div`
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;  
`

const Botao = styled.button`
    background-color: #EB9B00;
    color: #fff;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    

    &:hover {
        cursor: pointer;
        color: #002F52;
    }
`

const ImgLivro = styled.img`
    width: 150px;
`

const FormSect =  styled.form`
    overflow: hidden;
    position: relative;
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
`

const Campos = styled.input`
    padding: 10px;
    margin: 5px;
    color: #FFF;
    border: 1px solid #000;
    border-radius: 5px;
`

function CardLogin({titulo, img}) {
    return (
        <Card>
            <div>
                <Titulo tamanhoFonte="20px" cor="#EB9B00" alinhamento="left">{titulo}</Titulo>
                <FormSect>
                    <Campos placeholder="username" type="text"></Campos>
                    <Campos placeholder="password" type="password"></Campos>
                    <Botao>Entrar</Botao>
                </FormSect>
            </div>
            <div>
                <ImgLivro src={img}/>
                <Botao>Cadastre-se</Botao>
            </div>
        </Card>  
    )
}

export default CardLogin