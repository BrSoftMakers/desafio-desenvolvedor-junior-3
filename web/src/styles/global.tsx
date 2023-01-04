import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: ${theme.colors.background};
        font-family:  sans-serif;
        overflow-x: hidden;
        color: ${theme.colors.text_primary};
    }
    html {
        scroll-behavior: smooth;
        scrollbar-width: thin;
        scrollbar-color: ${theme.colors.stroke} ${theme.colors.background};
        }
        ::-webkit-scrollbar {
        width: 8px;
        }
        ::-webkit-scrollbar-track {
        background: ${theme.colors.background};
        }
        ::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.stroke};
        border: 2px solid transparent;
        border-radius: 8px;
    }
    button {
        cursor: pointer;
        border: none;
        &:disabled {
        cursor: default;
        }
    }
    input {
        outline: none;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
`;

export default GlobalStyles;
