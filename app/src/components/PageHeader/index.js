import React from "react";

import { PageHeaderStyled } from "./styles";

const PageHeader = ({ children }) => (
  <PageHeaderStyled>{children}</PageHeaderStyled>
);

export default PageHeader;
