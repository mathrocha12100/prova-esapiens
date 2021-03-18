import styled from 'styled-components';
import { choseTextColor } from '~/functions/styledFunctions';

export const PaginationContainer = styled.nav`
  display: flex;
  div.page-number-max {
    height: 38px;
    color: ${(props) => choseTextColor(props.theme)};
    display: flex;
    align-items: center;

    span.bar {
      margin-left: 10px;
      font-size: 18px;

    }
    span.amount-of-pages {
      margin-left: 10px;
      margin-right: 12px;
      font-size: 18px;
    }
  }

  div.page-number-container {
    height: 38px;
    width: 38px;
    border: 1px solid ${(props) => props.theme.body.backgroundQuaternary};
    color: ${(props) => choseTextColor(props.theme)};

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
    border-radius: 8px;
    transition: background 0.4s;

    &.disabled {
      opacity: 0.3;
    }

    &:hover:not(.disabled) {
      cursor: pointer;
      background: ${(props) => props.theme.body.primary};
      color: ${(props) => props.theme.body.defaultText};
    }

    &.selected-page {
      background: ${(props) => props.theme.body.primary};
      color: ${(props) => props.theme.body.defaultText};
      cursor: unset;
    }
  }
`;
