import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["blue-300"]};
  }

  body {
    background-color: ${(props) => props.theme["blue-600"]};
    color: ${(props) => props.theme["gray-100"]};
    height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Roboto, sans-serif;
  }
  
`