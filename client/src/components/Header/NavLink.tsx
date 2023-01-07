import { NavLinkContainer } from './styles';
import { Link } from "react-router-dom"

interface Props {
  title: string;
  onClick?: () => void
  patch: string
}

export default function NavLink({ title,patch,onClick }: Props) {



  return (
    <NavLinkContainer >
      <Link to={patch} onClick={onClick}>{title}</Link>
    </NavLinkContainer>
  );
}