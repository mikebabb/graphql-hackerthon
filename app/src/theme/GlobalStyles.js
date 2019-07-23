import { createGlobalStyle } from "styled-components";

import cssReset from "./utils/reset";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=DM+Sans:400,700&display=swap');

  ${cssReset}
  html{
    font-size: 100%;
  }
  body {
    background: ${({ theme }) => theme.palette.appBackground};
    font-family: 'DM Sans', sans-serif;
  }

  /* Typography */
  h1{
    font-size: 2rem;
    font-weight: 700;
  }

  /* Forms */
  form{
    width: 100%;
  }
  label {
    margin: ${({ theme }) => theme.spacing.small} 0;
    display: block;
  }
  input{
    background: ${({ theme }) => theme.palette.inputBackground};
    border: none;
    border-radius: 3px;
    padding: ${({ theme }) => theme.spacing.small};
  }
`;
