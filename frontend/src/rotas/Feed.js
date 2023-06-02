import HeaderCompleto from '../componentes/Header/headerCompleto'
import styled from 'styled-components'
import HomeFeed from '../componentes/HomeFeed/index.js';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function Feed() {
  return (
    <AppContainer>
      <HeaderCompleto />
      <HomeFeed />
    </AppContainer>
  );
}

export default Feed