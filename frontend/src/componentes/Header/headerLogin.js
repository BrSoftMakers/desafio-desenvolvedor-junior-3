import Logo from '../Logo'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
    
`

function HeaderLogin() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo/>
            </Link>
        </HeaderContainer>
    )
}

export default HeaderLogin