import styled from "styled-components";
import theme from "../../styles/theme";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background: ${theme.colors.surface_primary};
`;

export const CodeBy = styled.div`
  align-items: center;
  box-sizing: border-box;
  color: ${theme.colors.text_secondary};
  display: flex;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  height: 44px;
  padding: 0 12px;
  position: relative;
  width: 180px;
  white-space: nowrap;
  :hover {
    .credit {
      transform: rotateZ(360deg);
    }
    .franklin {
      transform: translateX(-72px);
    }
  }
  .credit {
    display: block;
    font-size: 20px;
    line-height: 20px;
    margin: 0;
    transition: 0.5s all cubic-bezier(0.7, 0, 0.3, 1);
  }
  .box {
    overflow: hidden;
  }
  .franklin {
    display: inline-block;
    padding: 0 3.36px;
    transform: translateX(0);
    transition: 0.5s all cubic-bezier(0.7, 0, 0.3, 1);
  }
`;
