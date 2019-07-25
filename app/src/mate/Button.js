import styled from "styled-components";

export default styled.button`
  background: ${({ theme }) => theme.palette.primaryButton};
  border: none;
  border-radius: 40px;
  color: ${({ theme }) => theme.palette.textColorInverted};
  padding: 0.5rem 1.5rem;
  &:hover {
    background: ${({ theme }) => theme.palette.primaryButtonHover};
  }
`;
