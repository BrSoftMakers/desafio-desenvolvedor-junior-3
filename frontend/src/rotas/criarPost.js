import HeaderCompleto from '../componentes/Header/headerCompleto'
import styled from 'styled-components'
import CardCadastroPost from '../componentes/Cards/CardCadastroPost'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function criarPost() {
  return (
    <AppContainer>
      <HeaderCompleto />
      <CardCadastroPost />
    </AppContainer>
  );
}

export default criarPost