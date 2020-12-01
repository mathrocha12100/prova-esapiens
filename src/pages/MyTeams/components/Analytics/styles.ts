import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 6px;
  display: grid;
  height: 50vh;
  grid-template-columns: 1fr 1fr;
  background: ${(props) =>
    `linear-gradient(0.25turn, ${props.theme.body.primary}, ${props.theme.body.secondary})`};
  div.first {
    border-right: 0.5px solid #fff;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    aside {
      display: flex;

      
      span {
        color: #fff;
        font-weight: bold;
        margin-left: 8px;
        border-bottom: 2px solid #fff;
        height: 24px;
      }
    }

    h4 {
      color: #fff;
      font-size: 1.6vw;
      margin-bottom: 1.2vh;
    }
  }
`;