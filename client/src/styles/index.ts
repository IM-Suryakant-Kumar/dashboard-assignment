import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Fira+Sans:wght@300;400;500;600;700;800;900&display=swap');

    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-family: 'Cinzel', serif; */
        font-family: 'Fira Sans', sans-serif;
    }
`;

export default GlobalStyle;