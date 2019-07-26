import styled from "styled-components";

export default styled.progress.attrs({ max: 100, value: 100 })`
  &::-webkit-progress-bar {
    appearance: none;
    border-radius: 4px;
    background: ${({ theme }) => theme.palette.background};
  }
  &::-webkit-progress-value {
    background: ${({ theme }) => theme.palette.primaryButton};
  }
`;
