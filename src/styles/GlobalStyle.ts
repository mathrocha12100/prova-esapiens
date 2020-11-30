import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.body.background};
    color: ${(props) => props.theme.body.text};
    max-width: 100vw;
    overflow-x: hidden;
  }

  *, button, input {
    font-family: Roboto, sans-serif;
  }

`;
