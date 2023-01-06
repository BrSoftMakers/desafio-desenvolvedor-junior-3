import styled, { keyframes } from "styled-components";
import theme from "../../styles/theme";

const justShake = keyframes`
  25% { 
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(-5px);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 20px;
  label {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    span {
      text-align: center;
    }
  }
  input {
    background: ${theme.colors.surface_primary};
    border-radius: ${theme.borderRadius.lg};
    color: ${theme.colors.text_primary};
    font-size: 18px;
    height: 100%;
    padding: 20px 30px;
    border: 2px solid ${theme.colors.stroke};
    &:focus {
      border: 2px solid ${theme.colors.brand};
    }
    &:invalid {
      animation: ${justShake} 0.3s forwards;
      color: ${theme.colors.red};
    }
  }
  p {
    color: ${theme.colors.red};
    margin: 0 auto;
  }
  .link {
    background-color: transparent;
    font-size: 18px;
    font-weight: bold;
    color: ${theme.colors.brand};
    padding: 25px 15px;
    max-width: max-content;
    margin: 0 auto;
    transition: color 0.3s, background 0.3s;
    &:hover {
      color: ${theme.colors.brand_secondary};
    }
  }
  .submit {
    border-radius: ${theme.borderRadius.lg};
    padding: 20px 30px;
    background: ${theme.colors.brand};
    font-size: 22px;
    font-weight: bold;
    color: ${theme.colors.text_on_brand_color};
    transition: color 0.3s, background 0.3s;
    &:hover {
      background: ${theme.colors.brand_secondary};
    }
  }
`;

export const FormContainer = styled.div`
  max-width: 500px;
  background-color: ${theme.colors.surface_primary};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: 10px 10px 64px 0px rgba(186, 186, 202, 0.75);
  padding: 30px 20px;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  h2 {
    padding: 10px 15px;
    font-size: 2.5rem;
    font-weight: 600;
    color: ${theme.colors.brand};
  }
`;

export const Container = styled.section`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 20px;

  .content {
    max-width: 450px;
    img {
      width: 100%;
    }
    h1 {
      font-size: 2rem;
      padding: 30px 0;
    }
    p {
      color: ${theme.colors.text_secondary};
      font-size: 1.2rem;
    }
    @media (max-width: ${theme.breakpoints.mobile}) {
      width: 100%;
      p,
      h1 {
        display: none;
      }
      img {
        width: 100%;
      }
    }
  }
  .scale {
    transform: scale(0.9);
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column-reverse;
    gap: 3rem;
  }
`;
