import styled from "styled-components";
import theme from "../../styles/theme";

export const PostContainer = styled.section`
  max-width: 1200px;
  width: 100%;
  padding: 0 32px;
  margin: 0 auto;
  background-color: ${theme.colors.surface_primary};
`;

export const PostHeader = styled.header`
  border-bottom: 1px solid ${theme.colors.stroke};
  margin-bottom: 64px;
  display: grid;
  padding: 64px 0;
  grid-template-columns: 1fr min(100ch, 100%) 1fr;

  h1 {
    margin: 0;
    font-size: 52px;
    font-weight: 800;
    grid-column: 2;
    letter-spacing: 0.01em;
    line-height: 1.0625;
  }

  p {
    margin-top: 1rem;
    margin-bottom: 32px;
    color: ${theme.colors.text_secondary};
    font-size: 20px;
    grid-column: 2;
    letter-spacing: 0.02em;
    line-height: 150%;
  }

  .meta {
    display: grid;
    font-size: 13px;
    grid-template-columns: repeat(2, 1fr);
    grid-column: 2;

    .label {
      color: ${theme.colors.text_secondary};
      display: block;
      margin-bottom: 0.5em;
    }
    .value {
      display: block;
      font-size: 18px;
      line-height: 20px;
    }
  }

  @media (min-width: ${theme.breakpoints.mobile}) {
    padding: 96px 0;
  }
`;

export const PostContent = styled.div`
  display: grid;
  padding: 16px 0 128px;
  grid-template-columns: 1fr min(100ch, 100%) 1fr;
  overflow: auto;

  .inner {
    grid-column: 2;
  }
`;

export const Controls = styled.div`
  padding: 32px 0 0;
  display: flex;
  justify-content: space-between;

  .wrapper {
    display: flex;
    gap: 1rem;
  }

  .delete,
  .edit {
    width: 150px;
    height: 50px;
    display: flex;
    align-items: center;
    border: none;
    border-radius: ${theme.borderRadius.md};
    background: ${theme.colors.red};
  }
  .edit {
    background: ${theme.colors.brand};
  }

  button,
  button span {
    transition: 200ms;
  }

  .text {
    transform: translateX(35px);
    color: white;
    font-weight: bold;
    font-size: 16px;
  }
  .icon {
    position: absolute;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    transform: translateX(110px);
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button:hover .text {
    color: transparent;
  }

  button:hover .icon {
    width: 150px;
    border-left: none;
    transform: translateX(0);
  }
  button:active .icon img {
    transform: scale(0.9);
  }
  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1.5rem;
    .wrapper {
      width: 100%;
      justify-content: space-between;
    }
  }
`;
