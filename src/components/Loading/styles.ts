import styled, { keyframes } from 'styled-components';

const svgRotateAnimation = keyframes`
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  svg {
    animation: ${svgRotateAnimation} 1s linear infinite;
  }
`;
