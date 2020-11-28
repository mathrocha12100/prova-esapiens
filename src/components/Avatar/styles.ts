import styled from 'styled-components';
import { ContainerProps } from './types';

export const Container = styled.div<ContainerProps>`
  width: ${(props) => props.size || 32}px;
  height: ${(props) => props.size || 32}px;
  background: ${(props) => props.backgroundColor || props.theme.body.primary};
  border-radius: ${(props) => (props.size ? props.size / 2 : 16)}px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.textColor || props.theme.body.text};
`;
