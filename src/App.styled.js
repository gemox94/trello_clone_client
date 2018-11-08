import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    @font-face {
        font-family: 'Roboto', sans-serif;
        src: url('https://fonts.googleapis.com/css?family=Roboto');
    }
    * {
        font-family: 'Roboto', sans-serif;
    }

    html, body {
        margin: 0;
        background-color: #f8f9fa !important;

    }
`;

export { GlobalStyle };