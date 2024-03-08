import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  /* *::before,
  *::after {
    ...
  } */

  html,
  body {
    width: 100%;
    height: 100%;
  }


`