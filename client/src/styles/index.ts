import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #ebf2fa;
        --secondary-color: #cae9ff;
        --logo-color: #3a86ff;
    }

    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-family: 'Cinzel', serif; */
        font-family: 'Fira Sans', sans-serif;
    }

    a {
        text-decoration: none;
        color: var(--logo-color);
    }
`;

export default GlobalStyle;
