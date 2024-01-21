import { createGlobalStyle } from 'styled-components'
import 'modern-normalize';



export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont,'Manrope', 'Montserrat', 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    min-height: 100vh;

    font-style: normal;
  }

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
a {
  text-decoration: none; 
  cursor: pointer;
}
ul {
    list-style: none;
    padding-left: 0;
    margin: 0
}

img {
    display: block;
    max-width: 100%;
    object-fit: cover;
}

h1,
h2,
h3,
h4,
h5,
h6
 {
  margin: 0 auto;
}

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }
`