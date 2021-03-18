import { darken, lighten } from 'polished';
import styled from 'styled-components';
import { choseTextColor } from '~/functions/styledFunctions';
import { hoverCardAnimation } from '../MainPage/styles';

export const Container = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.body.backgroundSecondary};
  header.list-repositories-header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10vh;
    padding: 0px 50px;

    @media (max-width: 700px) {
      padding: 0 20px;
    }

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
        color: ${(props) => choseTextColor(props.theme)};
        font-size: 18px;
      }
    }
  }

  main.list-repositories-main-container {
    height: 100%;
    background: ${(props) => props.theme.body.backgroundSecondary};
    padding: 0 60px;

    @media (max-width: 700px) {
      padding: 0 20px;
    }

    header.user-details-header {
      display: flex;

      div.avatar-container {
        img {
          max-width: 148px;
          max-height: 148px;
          border-radius: 50%;
        }
      }

      div.user-data-container {
        margin-left: 30px;
        margin-top: 10px;
        display: flex;
        flex-direction: column;

        strong {
          color: ${(props) =>
            props.theme.title === 'dark'
              ? props.theme.body.defaultText
              : props.theme.body.secondaryText};
          margin-bottom: 5px;
        }

        span {
          color: ${(props) =>
            props.theme.title === 'dark'
              ? props.theme.body.defaultText
              : props.theme.body.secondaryText};
          margin-bottom: 5px;
        }

        p {
          color: ${(props) =>
            props.theme.title === 'dark'
              ? props.theme.body.defaultText
              : props.theme.body.secondaryText};
        }
      }
    }

    div.not-found-container {
      display: flex;
      flex-direction: column;
      align-items: center;

      button.find-other-user-button {
        width: 250px;
        outline: none;
        border: none;
        padding: 10px;
        border-radius: 8px;
        background: ${(props) => props.theme.body.primary};
        color: ${props => props.theme.body.defaultText};
        font-weight: bold;
        transition: opacity 0.4s;

        &:hover {
          cursor: pointer;
          opacity: 0.8;
        }
      }
    }

    nav.user-details-data {
      margin-top: 30px;

      display: flex;
      flex-direction: row;

      .user-details-card {
        strong.user-details-card-amount {
          font-size: 52px;
          font-family: 'Roboto';

          color: ${(props) => props.theme.body.defaultText};
        }
        span.user-details-card-text {
          color: ${(props) => props.theme.body.defaultText};
          font-family: 'Roboto';
          font-weight: bold;
        }
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        border-radius: 8px;
        background: ${(props) => props.theme.body.primary};
        box-shadow: 2px 8px 15px
          ${(props) =>
            props.theme.title === 'dark'
              ? 'rgba(14,22,45, 0.5)'
              : 'rgba(255,82,86, 0.5)'};
        width: 200px;
        height: 140px;

        @media (max-width: 600px) {
          width: 140px;
          height: 120px;
          strong.user-details-card-amount {
            font-size: 42px;
          }
        }

        @media (max-width: 460px) {
          strong.user-details-card-amount {
            font-size: 28px;
          }
          span.user-details-card-text {
            margin-top: 6px;
            font-size: 14px;
          }
        }

        &:not(:last-child) {
          margin-right: 20px;
        }
        &:hover {
          box-shadow: 2px 8px 15px
            ${(props) =>
              props.theme.title === 'dark'
                ? 'rgba(14,22,45, 0.8)'
                : 'rgba(285,82,86, 0.5)'};
          cursor: pointer;
          animation: ${hoverCardAnimation} 1s forwards;
        }

        &.selected-card {
          background: ${(props) =>
            props.theme.title === 'ligth'
              ? darken(0.06, props.theme.body.primary)
              : lighten(0.06, props.theme.body.primary)};
        }
      }
    }

    div.user-details-content {
      margin-top: 22px;
    }
  }
`;
