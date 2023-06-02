import HeaderCompleto from '../componentes/Header/headerCompleto'
import styled from 'styled-components'
import MeusPostsCard from '../componentes/Cards/MeusPostsCard/index.js';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function Feed() {
  return (
    <AppContainer>
      <HeaderCompleto />
      <MeusPostsCard />
    </AppContainer>
  );
}

export default Feed