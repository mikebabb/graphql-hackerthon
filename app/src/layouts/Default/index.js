import React from "react";
import { Link } from "react-router-dom";

import Wrapper from "components/Wrapper";
import Nav, { NavItem } from "components/Nav";
import Content from "components/Content";

const Default = ({ children }) => (
  <Wrapper>
    <Nav>
      <ul>
        <NavItem>
          <Link to="/teams">Teams</Link>
        </NavItem>
      </ul>
    </Nav>
    <Content>{children}</Content>
  </Wrapper>
);

export default Default;
