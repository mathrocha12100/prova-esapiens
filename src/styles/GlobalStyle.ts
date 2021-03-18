import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, #root {
    max-width: 100vw;
    min-height: 100vh;
  } 

  *, button, input {
    font-family: Roboto, sans-serif;
  }

`;
