import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    :root {
        --white: #f5f5f5;
        --black: #0c0d0d;
        --gray: #666360;
        --purple:#1F1A38;
        --purple-100: #7b506f;
        --kobi: #DD99BB;
        --vanila: #ead7d1;
        --red: #c53030;
    }
    body {
        background-color: var(--purple);
        color: var(--white);
        height: 100vh;
    }
    body, input, button, span, p {
        font-family: 'Roboto Mono', serif;
        font-size: 1rem;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family:'Comfortaa', cursive;
    }
    button {
        cursor: pointer;
    }
    a {
        text-decoration: none;
        color: var(--kobi);
    }
    ul {
        list-style: none;
    }
    h2 {
        font-weight: 300;
    }
`