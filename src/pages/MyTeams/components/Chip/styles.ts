import styled, { css } from 'styled-components';
import { ContainerProps } from './types';

export const Container = styled.button<ContainerProps>`
  border: 0;
  ${(props) => props.focus && css`
    border: 2px solid ${props => props.theme.body.primary};
  `}

  &:not(:focus) {
    cursor: pointer;
    transition: opacity 0.4s;
  }


  width: 100%;
  padding: 1.5vh;

  display: flex;
  align-items: center;
  justify-content: space-between; 
  background: ${props => props.theme.body.backgroundTertiary};
  color: ${props => props.theme.body.text}; 

  outline: none;
  transition: border 0.4s;
  border-radius: 6px;
  margin-bottom: 1vh;
`;
