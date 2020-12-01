import styled from 'styled-components';

export const Container = styled.div`
  label {
    color: ${props => props.theme.body.text};
  }

  input {
    border: 0;
    border: 1px solid ${props => props.theme.body.backgroundQuaternary};

    &::placeholder {
      color: ${props => props.theme.body.backgroundQuaternary};
    }

    margin: 7px 0;
    outline: none;

    border-radius: 2px;
    background: ${props => props.theme.body.backgroundTertiary};

    height: 36px;
    width: 100%;
    padding: 0 12px;
    color: ${props => props.theme.body.text};

    &:focus {
      border: 2px solid ${props => props.theme.body.primary};
    }
  }
`;
