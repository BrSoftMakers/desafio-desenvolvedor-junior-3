import styled from "styled-components";
import theme from "../../styles/theme";

const GoBackButton = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background: none;
  font-size: 18px;
  padding: 15px 10px;
  border-radius: ${theme.borderRadius.md};
  letter-spacing: 1px;
  transition: all 0.2s linear;
  width: 150px;
  justify-content: center;

  img {
    transition: all 0.2s ease-in;
  }

  &:hover {
    background: ${theme.colors.background};
    img {
      transform: translateX(-5px);
    }
  }
`;

export default GoBackButton;
