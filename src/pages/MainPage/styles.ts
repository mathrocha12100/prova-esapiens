import styled, { keyframes } from 'styled-components';

export const hoverCardAnimation = keyframes`
  0% {
		transform: translatey(0px);
	}
	100% {
		transform: translatey(-10px);
	}
`;

export const Container = styled.div`
  height: 100%;

  header.list-repositories-header-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 10vh;
    padding: 0px 50px;
  }

  header.find-repositories-header-container {
    height: 10vh;
    padding: 0px 50px;
    background: ${(props) => props.theme.header.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;

    img.github-logo {
      max-width: 128px;
      max-height: 128px;
    }

    div.header-actions-buttons {
      display: flex;
      align-items: center;

      .change-language-button {
        margin-left: 12px;
        background: none;
        border: none;
        outline: none;
        padding: 6px;
        color: ${(props) => props.theme.body.defaultText};
        font-size: 18px;
        transition: opacity 0.4s;

        &:hover {
          cursor: pointer;
          opacity: 0.6;
        }
      }
    }
  }

  div.find-repository-wrapper {
    height: 90vh;

    main.find-repository-container {
      height: 100%;
      background: ${(props) => props.theme.body.primary};
      display: flex;
      align-items: center;
      justify-content: space-around;

      div.find-repository-form-container {
        width: 40%;

        @media (max-width: 900px) {
          width: 80%;
        }

        h1.title {
          font-size: 62px;
          margin-bottom: 70px;
          color: ${(props) => props.theme.body.defaultText};
          font-family: 'Roboto';
        }

        @media (max-width: 400px) {
          h1.title {
            font-size: 50px;
          }
        }
      }

      div.github-icon-container {
        width: 40%;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 900px) {
          display: none;
        }

        img.github-cat-logo {
          height: 100%;
          width: 100%;
        }
      }
    }
  }

  main.containerContent {
    margin: 1vh 3vw;

    display: grid;
    grid-gap: 5vw;
    grid-template-columns: 1fr 1fr;
  }
`;
