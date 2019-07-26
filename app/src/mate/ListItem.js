import styled from "styled-components";

export default styled.li`
  background: ${({ theme }) => theme.palette.background};
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 1rem;
  margin-bottom: 6px;

  a {
    display: block;
    margin-left: 0.5rem;
  }
`;
