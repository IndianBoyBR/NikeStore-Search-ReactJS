import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Metropolis, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    background: ${props => props.theme.palette.secondary.default};
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }
`;
