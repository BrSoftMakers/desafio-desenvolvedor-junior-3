import styled from "styled-components";
import theme from "../../styles/theme";

export const BlogContainer = styled.section`
  margin: 0 auto;
  padding: 50px;
  max-width: 900px;
`;

export const PostsFilters = styled.div`
  margin: 0 auto;
  padding: 50px 50px 0;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    display: flex;
    min-width: 170px;
    justify-content: space-between;
    gap: 0.5rem;
    align-items: center;
    background: none;
    border: 1px solid ${theme.colors.stroke};
    color: ${theme.colors.text_secondary};
    font-size: 18px;
    padding: 15px 10px;
    border-radius: ${theme.borderRadius.md};
    transition: 0.3s ease-in-out;
  }
  select {
    background: none;
    border: 1px solid ${theme.colors.stroke};
    color: ${theme.colors.text_secondary};
    font-size: 18px;
    padding: 15px 10px;
    border-radius: ${theme.borderRadius.md};
    transition: 0.3s ease-in-out;
    outline: none;
    cursor: pointer;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;

    button,
    select {
      width: 100%;
    }
  }
`;
