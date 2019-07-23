import styled from "styled-components";

export const ContentStyled = styled.div`
  background: ${({ theme }) => theme.palette.navBackground};
  box-shadow: 0 10px 20px rgba(241, 234, 234, 0), 0 6px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  flex: 1;
  display: flex;
  margin: ${({ theme }) => theme.spacing.medium};
  margin-top: ${({ theme }) => theme.spacing.large};
  padding: ${({ theme }) => theme.spacing.medium};
`;
