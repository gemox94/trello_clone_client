import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    @font-face {
    font-family: 'Roboto', sans-serif;
    }
    * {
        font-family: 'Roboto', sans-serif;
    }

    html, body {
        margin: 0;
        background-color: #fff;
    }
`;

export { GlobalStyle };