import HeaderLogin from '../componentes/Header/headerLogin'
import CardHome from '../componentes/Cards/CardHome'
import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function Home() {
  return (
    <AppContainer>
      <HeaderLogin />
      <CardHome />
    </AppContainer>
  );
}

export default Home