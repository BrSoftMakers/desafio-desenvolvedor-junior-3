import styled from 'styled-components'
import FeedMeusPosts from './FeedMeusPosts'
import imagemLivro from '../../imagens/livro2.png' 


const FeedContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: auto 0;
    height: 100%;
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

function MeusPostsCard() {

    return (
        <FeedContainer>
            <FeedMeusPosts
                titulo="Minhas publicações"
                img={imagemLivro}
            />
        </FeedContainer>
    )
}

export default MeusPostsCard