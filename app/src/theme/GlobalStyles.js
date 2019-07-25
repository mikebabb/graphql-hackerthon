import { createGlobalStyle } from "styled-components";

import cssReset from "./utils/reset";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,900i&display=swap');

  ${cssReset}
  html{
    font-size: 100%;
  }
  body {
    background: ${({ theme }) => theme.palette.background};
    color: ${({ theme }) => theme.palette.textColor};
    font-family: 'Roboto', sans-serif;
  }
  a{
    color: ${({ theme }) => theme.palette.linkColor};
    font-weight: ${({ theme }) => theme.type.weights.bold};
    text-decoration: none;
    transition: background 0.2s ease-out;
  }
  h1, h2, h3, h4, h5{
    font-family: 'Playfair Display', serif;
    font-weight: 900;
    font-style: italic;
  }
  h1{
    font-size: 4rem;
  }
  h2{
    font-size: 2rem;
  }
  h3{
    font-size: 1.6rem;
  }
  h4{
    font-size: 1.2rem;
  }
`;
