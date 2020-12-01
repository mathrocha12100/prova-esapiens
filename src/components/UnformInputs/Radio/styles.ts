import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  span {
    margin-bottom: 7px;
  }

  label {
    &:not(:last-child) {
      margin-right: 10px;
    }


    input {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      margin-right: 10px; 
      background-clip: content-box;
      border: 2px solid red;
      border-radius: 50%;
      padding: 6px;
      background: ${props => props.theme.body.background};

      &:checked {
        padding: 6px;
        background: ${(props) => props.theme.body.primary};
      }

      height: 18px;
      width: 18px;

      cursor: pointer;
      outline: none;
      border: 0;

      transition: opacity 0.4s;
      &:hover:not(:focus) {
        opacity: 0.4;
      }
    }
  }
`;
