import styled from "styled-components";

export default styled.li`
  background: ${({ theme }) => theme.palette.background};
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 6px;
  list-style-type: none;

  a {
    display: block;
  }
`;
