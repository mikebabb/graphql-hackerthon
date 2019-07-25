import styled from "styled-components";

export const ContentStyled = styled.div`
  background: ${({ theme }) => theme.palette.backgroundLight};
  flex: 1;
  flex-direction: column;
  display: flex;
  padding: ${({ theme }) => theme.spacing.medium};
`;
