import { createGlobalStyle } from "styled-components";

import cssReset from "./utils/reset";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  ${cssReset}
  html{
    font-size: 100%;
  }
  body {
    background: ${({ theme }) => theme.palette.appBackground};
    font-family: 'Roboto', sans-serif;
  }

  /* Typography */
  h1{
    font-size: 2rem;
    font-weight: 700;
  }
`;
