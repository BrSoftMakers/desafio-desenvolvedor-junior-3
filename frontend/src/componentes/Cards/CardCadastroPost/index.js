import styled from 'styled-components'
import PostForm from '../PostForm/index';


const CadastroContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: auto 0;
    height: 470px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    margin-bottom: 0;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
`

function CardHome() {

    return (
        <CadastroContainer>
            <Titulo>Faça a sua Publicaçao</Titulo>
            <Subtitulo>e compartilhe conosco seu conhecimento</Subtitulo>
            <PostForm
                titulo="Preencha os campos abaixo"
            />
        </CadastroContainer>
    )
}

export default CardHome