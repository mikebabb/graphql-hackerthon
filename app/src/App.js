import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "theme";
import GlobalStyles from "theme/GlobalStyles";

import AppRouter from "./router";

const App = () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyles />
      <AppRouter />
    </React.Fragment>
  </ThemeProvider>
);

export default App;
