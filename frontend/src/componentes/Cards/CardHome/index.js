import styled from 'styled-components'
import CardLogin from '../CardLogin'
import imagemLivro from '../../imagens/livro2.png' 


const LoginContainer = styled.section`
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
        <LoginContainer>
            <Titulo>Welcome to Soft</Titulo>
            <Subtitulo>Compartilhe novas ideias em nosso blog.</Subtitulo>
            <CardLogin
                titulo="Login"
                img={imagemLivro}
            />
        </LoginContainer>
    )
}

export default CardHome