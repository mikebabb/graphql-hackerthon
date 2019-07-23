import styled from "styled-components";

export const NavStyled = styled.div`
  background: ${({ theme }) => theme.palette.navBackground};
  border-bottom: 1px solid ${({ theme }) => theme.palette.navBorderColor};
  padding: ${({ theme }) => theme.spacing.medium};
`;
