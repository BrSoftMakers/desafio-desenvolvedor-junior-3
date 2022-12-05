import { lighten } from 'polished';
import styled from 'styled-components';


export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
  }
`;

export const NavLinkContainer = styled.li`
list-style: none;
  a {
    font-size: 20px;
    text-transform: uppercase;
    background-color: #1B2138;
    border: none;
    cursor: pointer;
    color: white;
    text-decoration: none;
    transition: 0.5s;
    :hover {
      color: #696969
    }

  }
`;