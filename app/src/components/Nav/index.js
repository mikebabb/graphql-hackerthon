import React from "react";

import NavItem from "./NavItem";
import { NavStyled } from "./styles";

const Nav = ({ children }) => <NavStyled>{children}</NavStyled>;

export { NavItem };
export default Nav;
