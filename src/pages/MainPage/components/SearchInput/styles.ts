import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;

  input.search-input {
    position: absolute;
    z-index: 4;
    width: 100%;
    height: 52px;
    border-radius: 5px;
    outline: none;
    border: none;
    box-shadow: 2px 8px 15px rgba(0, 0, 0, 0.1);
    padding: 0 10px;
    font-size: 16px;
    color: #333;
    font-family: 'Roboto';

    &::placeholder {
      color: #999;
    }
  }

  button.search-input-submit-button {
    position: absolute;
    z-index: 5;
    right: 10px;
    border-radius: 5px;
    height: 42px;
    width: 52px;
    outline: none;
    border: none;
    transition: opacity 0.4s;
    background: ${(props) => props.theme.body.primary};
    box-shadow: 2px 8px 15px
      ${(props) =>
        props.theme.title === 'dark'
          ? 'rgba(14,22,45, 0.5)'
          : 'rgba(255,82,86, 0.5)'};

    &:hover {
      cursor: pointer;
      opacity: 0.9;
    }

    svg.search-input-loading-svg {
      animation: ${spinAnimation} 1s linear infinite;
    }
  }
`;
