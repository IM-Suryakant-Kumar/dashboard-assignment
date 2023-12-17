import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Fira+Sans:wght@300;400;500;600;700;800;900&display=swap');

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
