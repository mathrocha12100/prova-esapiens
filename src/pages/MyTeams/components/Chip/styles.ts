import styled from 'styled-components';

export const Container = styled.button`
  &:not(:focus) {
    cursor: pointer;

    transition: opacity 0.4s;
    &:hover {
      opacity: 0.4;
    }
  }


  width: 100%;
  padding: 1.5vh;

  display: flex;
  align-items: center;
  justify-content: space-between; 
  background: ${props => props.theme.body.backgroundTertiary};
  color: ${props => props.theme.body.text}; 

  outline: none;
  border: 0;
  transition: border 0.4s;
  border-radius: 6px;

  &:focus {
    border: 2px solid ${props => props.theme.body.primary};
  }
  margin-bottom: 1vh;
`;
