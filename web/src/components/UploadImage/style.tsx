import styled from "styled-components";
import theme from "../../styles/theme";

const Container = styled.div`
  width: 100%;

  img {
    width: 100%;
    border-radius: ${theme.borderRadius.md};
  }
  input {
    color: ${theme.colors.text_primary};
    padding: 10px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    white-space: wrap;

    ::-webkit-file-upload-button {
      cursor: pointer;
      width: 100%;
      border: 1px solid ${theme.colors.stroke};
      border-radius: ${theme.borderRadius.md};
      padding: 10px 20px;
      margin-bottom: 10px;
      display: block;
      font-size: 16px;
      transition: all 0.2s linear;

      :hover {
        background-color: ${theme.colors.surface_secondary};
      }
    }
  }
`;

export default Container;
