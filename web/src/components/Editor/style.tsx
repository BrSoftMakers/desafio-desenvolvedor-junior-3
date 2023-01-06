import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  padding: 20px 0;

  .inner {
    display: flex;
    gap: 1rem;
    @media (max-width: ${theme.breakpoints.smallDesktop}) {
      padding: 20px 10px;
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
      flex-direction: column;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  height: 100%;
  gap: 1.5rem;
  padding: 20px 32px;

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
export const Column = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 280px;
  padding: 20px 0;
  align-items: center;

  button {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    background: ${theme.colors.brand};
    font-size: 18px;
    font-weight: 600;
    color: ${theme.colors.text_on_brand_color};
    padding: 15px 10px;
    border-radius: ${theme.borderRadius.md};
    letter-spacing: 1px;
    transition: all 0.2s linear;
    min-width: 150px;
    justify-content: center;
    width: 100%;

    img {
      transition: all 0.4s ease-in;
    }
  }
  button:hover {
    background: ${theme.colors.brand_secondary};
    img {
      transform: translateX(8px);
    }
  }

  @media (max-width: ${theme.breakpoints.smallDesktop}) {
    padding: 20px 10px;
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    max-width: 100%;
  }
`;
