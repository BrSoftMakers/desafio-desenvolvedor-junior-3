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
