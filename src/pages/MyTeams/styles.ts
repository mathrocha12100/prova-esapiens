import styled from 'styled-components';

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  outline: none;
  border-radius: 12px;
  background: ${(props) =>
    `linear-gradient(0.25turn, ${props.theme.body.secondary}, ${props.theme.body.primary})`};

  width: 5vh;
  height: 5vh;

  cursor: pointer;

  transition: opacity 0.4s;

  &:hover { 
    opacity: 0.7;
  }
`;
