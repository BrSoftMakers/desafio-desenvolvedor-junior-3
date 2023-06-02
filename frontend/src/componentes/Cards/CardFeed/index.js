import styled from "styled-components"


const Card = styled.div`
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 800px;
    padding: 25px 20px;
    justify-content: center;
    width: 100%;  
    height: 100%;
`

const FeedContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: auto 0;
    height: 100%;
    width: 100%;
`
const Titulo = styled.h1`
    width: 100%;
    padding: 10px;
    color: #002F52;
    font-size: ${props => props.tamanhoFonte || '30px;'};
    text-align: top;
    margin: 0;
`


function CardFeed({titulo, img}) {
    return (
        <FeedContainer>
            <Card>
                <Titulo>Publicações do momento</Titulo>
            </Card>  
        </FeedContainer>
    )
}

export default CardFeed