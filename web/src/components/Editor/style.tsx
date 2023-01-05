import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.section`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  gap: 1rem;

  @media (max-width: ${theme.breakpoints.smallDesktop}) {
    padding: 20px 10px;
  }
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
export const Column = styled.aside`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 280px;

  button {
    max-width: 300px;
    height: 50px;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 3px;
    background: ${theme.colors.brand};
  }

  button,
  img,
  button span {
    transition: 200ms;
  }

  button .text {
    color: ${theme.colors.text_on_brand_color};
    font-weight: bold;
    font-size: 18px;
    padding-left: 10px;
  }

  button .icon {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button:hover img {
    transform: rotate(45deg);
  }

  button:hover {
    background: ${theme.colors.brand_secondary};
  }
  button:hover .icon {
    width: 100%;
  }
  button:active {
    transform: scale(0.95);
  }
`;
