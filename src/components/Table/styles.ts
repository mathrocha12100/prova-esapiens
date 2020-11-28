import styled from 'styled-components';

export const Container = styled.table`
  width: 100%;
  padding: 1vh;
  background: ${(props) => props.theme.body.backgroundSecondary};

  thead tr th {
    

    &:not(:last-child) {
      border-right: 1px solid
        ${(props) => props.theme.body.backgroundQuaternary};
    }
    padding: 10px;

    div {
      display: flex;
      flex-direction: column;
    }
  }
`;
