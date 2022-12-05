import NavLink from './NavLink';
import { Container } from './styles';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../provider/auth';

export function Header() {
  const { setAuth } = useContext(AuthContext)
  function returnLogin() {
    localStorage.clear();
    setAuth(false)
}
  return (
    <Container>
      <ul>
        <NavLink patch='/dashboard' title="Home"  />
        <NavLink patch='/blog' title="Criar Blog" />
        <NavLink patch='/' title="Sair" onClick={returnLogin}/>
        
      </ul>
    </Container>
  );
}