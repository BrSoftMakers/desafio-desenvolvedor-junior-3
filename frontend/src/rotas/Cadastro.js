import HeaderLogin from '../componentes/Header/headerLogin'
import styled from 'styled-components'
import CardCadastro from '../componentes/Cards/CardCadastro';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

function Cadastro() {
  return (
    <AppContainer>
      <HeaderLogin />
      <CardCadastro />
    </AppContainer>
  );
}

export default Cadastro