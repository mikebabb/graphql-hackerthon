import styled from "styled-components";

export const NavStyled = styled.nav`
  background: ${({ theme }) => theme.palette.navBackground};
  border-bottom: 1px solid ${({ theme }) => theme.palette.borderColor};
`;
