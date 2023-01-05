import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.section`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  padding: 20px 10px;
  gap: 1rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  height: 100%;
  gap: 1.5rem;

  input {
    background: ${theme.colors.surface_primary};
    color: ${theme.colors.text_primary};
    font-size: 18px;
    padding: 15px 10px;
    border-radius: 3px;
    border: 1px solid ${theme.colors.stroke};
    transition: 0.3s ease-in-out;
  }
`;
