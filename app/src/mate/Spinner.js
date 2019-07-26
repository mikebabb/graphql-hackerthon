import styled, { keyframes } from "styled-components";

const scaleout = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
`;

export default styled.div`
  width: 40px;
  height: 40px;
  margin: 100px auto;
  background-color: #333;

  border-radius: 100%;
  -webkit-animation: ${scaleout} 1s infinite ease-in-out;
  animation: ${scaleout} 1s infinite ease-in-out;
`;
