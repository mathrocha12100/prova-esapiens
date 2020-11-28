import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: inline-block;

  div.menu-content {
    display: none;
    position: absolute;
    background: ${(props) => props.theme.body.backgroundSecondary};
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    min-width: 120px;

    button.option {
      cursor: pointer;

      transition: opacity 0.3s;

      &:hover {
        opacity: 0.5;
      }

      padding: 2vh;
      display: flex;
      align-items: center;

      color: ${(props) => props.theme.body.text};
      border: 0;
      outline: 0;
      background: ${(props) => props.theme.body.backgroundSecondary};
    }
  }

  &:hover .menu-content {
    display: block;
  }
`;
