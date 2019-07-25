import styled from "styled-components";

const NavItem = styled.li`
  background: ${({ theme }) => theme.palette.navItemBackground};
  display: inline-block;
  a {
    color: ${({ theme }) => theme.palette.textColor};
    display: block;
    padding: ${({ theme }) => theme.spacing.medium};
    &:hover {
      background: ${({ theme }) => theme.palette.navItemBackgroundHover};
    }
  }
`;

export default NavItem;
