import styled from 'styled-components';
import { ContainerProps } from './types';

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: ${(props) =>
    props.applicationTheme === 'dark' ? 'flex-start' : 'flex-end'};
  margin-right: ${(props) => (props.applicationTheme === 'dark' ? '0px' : '10px')};
  margin-left: ${(props) => (props.applicationTheme === 'light' ? '0px' : '10px')};
`;
