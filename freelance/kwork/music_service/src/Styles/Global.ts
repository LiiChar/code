import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --backgroundDark: rgb(24,24,24);
  --textDark: rgb(255,255,255);
  --sideDark: rgb(28,28,28);
  --backgroundLight: rgb(255,255,255);
  --textLight: rgb(0,1,0);
  --sideLight: rgb(245,245,245);
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus {
  outline: none;
}

html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background-color: ${({theme}) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  overflow-x: hidden;
  font-family: 'Open Sans', sans-serif;
}

#root {
  width: 100%;
  height: 100%;
}

`