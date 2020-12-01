import styled from 'styled-components';

export const Container = styled.div`
  label {
    color: ${props => props.theme.body.text};
  }

  textarea {
    resize: none;
    border: 0;
    border: 1px solid ${props => props.theme.body.backgroundQuaternary};

    &::placeholder {
      color: ${props => props.theme.body.backgroundQuaternary};
    }

    margin-top: 7px;
    outline: none;

    border-radius: 2px;
    background: ${props => props.theme.body.backgroundTertiary};

    width: 100%;

    padding: 12px;
    color: ${props => props.theme.body.text};

    &:focus {
      border: 2px solid ${props => props.theme.body.primary};
    }
  }
`;
