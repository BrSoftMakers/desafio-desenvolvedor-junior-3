import styled from "styled-components";
import theme from "../../styles/theme";

export const CardPostContainer = styled.div`
  overflow: hidden;
  border: 1px solid ${theme.colors.stroke};
  margin-bottom: 64px;
  border-radius: 10px;
  cursor: pointer;

  .thumbnail {
    width: 100%;
    height: 258px;
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${theme.colors.surface_secondary};
    background-image: url(${(props: { bg: string }) => props.bg});
  }
  .details {
    padding: 32px;
    background-color: ${theme.colors.surface_primary};
    h2 {
      padding-top: 0;
      margin-bottom: 16px;
      font-size: 24px;
      letter-spacing: 0.024em;
    }
    p {
      margin-bottom: 32px;
      font-size: 16px;
    }
  }
  .meta {
    display: grid;
    font-size: 13px;
    grid-template-columns: repeat(2, 1fr);

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
`;

export const CardPostLink = styled.a`
  color: ${theme.colors.text_primary};
`;
