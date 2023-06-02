import perfil from '../../imagens/perfil.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;
`

const icones = [perfil]

function IconesHeader() {
    return (
        <Icones>
            { icones.map( (icone) => (
              <Icone><img src={icone}></img></Icone>
            )) }
        </Icones>
    )
}

export default IconesHeader