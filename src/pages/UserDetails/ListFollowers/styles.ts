import { choseTextColor } from '~/functions/styledFunctions';
import styled from 'styled-components';
import { hoverCardAnimation } from '~/pages/MainPage/styles';

export const ListFollowersContainer = styled.div`
  header.list-followers-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3.list-followers-title {
      color: ${(props) =>
        props.theme.title === 'dark'
          ? props.theme.body.defaultText
          : props.theme.body.secondaryText};
    }
    div.filters {
      button.filter-button {
        cursor: pointer;
        padding: 8px 12px;
        outline: none;
        border: none;
        background: transparent;
        border: 1px solid ${(props) => props.theme.body.backgroundQuaternary};
        color: ${(props) => choseTextColor(props.theme)};
        border-radius: 5px;
        transition: opacity 0.4s;

        &:hover {
          opacity: 0.4;
        }
      }
    }

    margin-bottom: 20px;
  }
  div.space-bottom {
    padding: 10px;
  }
`;

export const CardContainer = styled.div`
  background: ${(props) => props.theme.body.backgroundTertiary};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 2px 8px 15px rgba(0, 0, 0, 0.2);

  display: flex;


  img.follower-card-avatar {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    margin-right: 16px;
  }

  strong.follower-card-title {
    color: ${(props) =>
      props.theme.title === 'dark'
        ? props.theme.body.defaultText
        : props.theme.body.secondaryText};
  }

  margin-bottom: 20px;
  transition: background 0.3s;

  &:hover {
    cursor: pointer;
    animation: ${hoverCardAnimation} 1s forwards;
    background: ${(props) => props.theme.body.primary};

    strong.repository-card-title,
    p.repository-card-description,
    ul.general-data-content > li {
      color: ${(props) => props.theme.body.defaultText};
    }
  }
`;
