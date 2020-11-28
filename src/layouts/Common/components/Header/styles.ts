import styled from 'styled-components';

export const Container = styled.header`
  height: 6vh;
  background: ${(props) =>
    `linear-gradient(0.25turn, ${props.theme.body.primary}, ${props.theme.body.secondary})`};
  color: ${(props) => props.theme.header.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;

  img {
    height: 5vh;
    margin-right: 10px;
  }

  div.wrapper {
    display: flex;
    align-items: center;
    flex: 1;

    strong {
      font-size: 2vh;
    }
  }
  strong {
      font-size: 2vh;
    }
`;

export const AnchorButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  border: 0;
  background: transparent;
  outline: 0;
  transition: opacity 0.4s;
  margin: 0 1vh;
  font-size: 1vw;

  &:hover { 
    opacity: 0.4;
  }
`;