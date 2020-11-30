import styled from 'styled-components';
import { darken } from 'polished';
import { themeIsLight } from '@functions/stringFunctions';

export const Container = styled.table`
  width: 100%;
  border-collapse: collapse;
  padding: 1vh;
  background: ${(props) => props.theme.body.backgroundSecondary};

  tbody tr {
    &:hover {
      background: ${(props) => themeIsLight(props.theme) ? '#f7eef7' : darken(0.8, '#f7eef7')};
      border-radius: 5px;
    }
  }

  tbody tr td {
    padding: 10px;
    

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      
      div.actionsButtons {
        display: flex;

          button {
          background: transparent;
          cursor: pointer;
          outline: none;
          border: 0;
          transition: opacity 0.4s;
          &:hover {
            opacity: 0.4;
          }

          &:not(:last-child):not(:first-child) {
            margin: 0 1vw;
          }

          svg {
            fill: ${(props) => props.theme.body.primary};
          }
        }

        
      }
    }
  }

  thead tr th {
    &:not(:last-child) {
      border-right: 1px solid
        ${(props) => props.theme.body.backgroundQuaternary};
    }
    padding: 10px;

    div {
      display: flex;
      justify-content: space-between;

      div.buttons {
        display: flex;
        flex-direction: column;

        button {
          background: transparent;

          svg {
            fill: ${(props) => props.theme.body.text};
          }

          cursor: pointer;  
          outline: none;
          border: 0;
          width: 1.2vw;
          transition: opacity 0.4s;

          &:hover {
            opacity: 0.6;
          }
        }
      }

    }
  }
`;
