import React from "react";

import Wrapper from "components/Wrapper";
import Nav from "components/Nav";
import Content from "components/Content";

const Default = ({ children }) => (
  <Wrapper>
    <Nav />
    <Content>{children}</Content>
  </Wrapper>
);

export default Default;
