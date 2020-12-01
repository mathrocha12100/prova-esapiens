import styled from 'styled-components';

export const Container = styled.div`
  header.containerHeader {
    display: flex;
    align-items: center;
    justify-content: center;

    strong {
      color: ${(props) => props.theme.body.text};
    }

    margin-bottom: 6vh;
  }

  main.containerContent {
    margin: 1vh 3vw;

    display: grid;
    grid-gap: 5vw;
    grid-template-columns: 1fr 1fr;
  }
`;
