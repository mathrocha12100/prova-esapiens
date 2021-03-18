import styled from 'styled-components';
import { choseTextColor } from '~/functions/styledFunctions';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 20px 0;

  h1.not-found-message {
    margin-top: 30px;
    color: ${props => choseTextColor(props.theme)};
  }

  @media (max-width: 500px) {
    h1.not-found-message {
      font-size: 20px;
    }
  }

  svg {
    color: ${props => choseTextColor(props.theme)};
  }
`;