import styled from 'styled-components';
import { lighten, darken } from 'polished';
import { themeIsLight } from '@functions/stringFunctions';

export const Container = styled.div`
  border-radius: 10px;
  background: ${(props) => props.theme.body.backgroundSecondary};
  box-shadow: 3px 2px 2px
    ${(props) =>
      themeIsLight(props.theme)
        ? lighten(0.6, props.theme.body.text)
        : darken(0.7, props.theme.body.text)};

  hr {
    margin: 3vh 0;
    border-color: ${(props) => props.theme.body.backgroundTertiary};
  }

  header.card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 3vh 2vh;

    strong {
      font-size: 3vh;
      color: ${(props) => props.theme.body.secondary};
    }

    border-bottom: 1px solid
      ${(props) =>
        themeIsLight(props.theme)
          ? lighten(0.6, props.theme.body.text)
          : props.theme.body.backgroundTertiary};
  }
  main.card-content {
    margin: 3vh 0;
    padding: 6px 10px;
  }
`;
