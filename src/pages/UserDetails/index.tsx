import React, { useContext, useState, useEffect } from 'react';
import ThemeSwitch from '~/components/ThemeSwitch';
import { CardTypes, UserDetailsProps, UserDetailsPageParams } from './types';

import ListRepositories from './ListRepositories';
import ListFollowers from './ListFollowers';
import ListFollowing from './ListFollowing';

import { Container } from './styles';
import githubLogoWhite from '~/assets/GitHub_Logo_White.svg';
import githubLogoBlack from '~/assets/GitHub_BlackLogo.svg';
import { useParams, useHistory } from 'react-router-dom';
import { findGithubUser } from '../MainPage/components/SearchInput/functions';
import { ThemeContext } from 'styled-components';
import { AppContext } from '~/App';
import Menu from '~/components/Menu';
import { countryToFlag } from '~/functions/stringFunctions';

function UserDetails(props: UserDetailsProps) {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState(props.location.state);
  const [loading, setLoading] = useState(false);
  const { title } = useContext(ThemeContext);
  const [selectedCard, setSelectedCard] = useState<CardTypes>('repositories');
  const { username } = useParams<UserDetailsPageParams>();
  const history = useHistory();
  const { language, changeLanguage } = useContext(AppContext);

  useEffect(() => {
    if (username !== userData?.login) {
      findGithubUser(username, setLoading, history, setUserData);
    }
  }, [username]);

  function whichListRender() {
    switch (selectedCard) {
      case 'followers': {
        return <ListFollowers loadingData={loading} userData={userData} />;
      }
      case 'following': {
        return <ListFollowing loadingData={loading} userData={userData} />;
      }
      case 'repositories': {
        return <ListRepositories loadingData={loading} userData={userData} />;
      }
      default:
        return <ListFollowers loadingData={loading} userData={userData} />;
    }
  }

  return (
    <Container className="list-repositories-container">
      <header className="list-repositories-header-container">
        <a href="/">
          <img
            className="github-logo"
            src={title === 'dark' ? githubLogoWhite : githubLogoBlack}
            alt="githubLogo"
          />
        </a>
        <div className="header-actions-buttons">
          <ThemeSwitch />
          <Menu
            open={open}
            onClose={() => setOpen(false)}
            anchorClassName="change-language-button"
            anchor={
              <button
                id="change-language-button"
                className="change-language-button"
                onClick={() => setOpen(true)}
              >
                {countryToFlag(language.flag)}
              </button>
            }
            options={[
              {
                key: 1,
                label: `${countryToFlag('BR')} Português`,
                onClick: () => {
                  changeLanguage('ptBr');
                  setOpen(false);
                },
                className: 'portuguese-menu-item',
              },
              {
                key: 2,
                label: `${countryToFlag('US')} English`,
                onClick: () => {
                  changeLanguage('enUs');
                  setOpen(false);
                },
                className: 'english-menu-item',
              },
            ]}
          />
        </div>{' '}
      </header>
      <main className="list-repositories-main-container">
        <header className="user-details-header">
          <div className="avatar-container">
            <img src={userData?.avatar_url || ''} alt="" />
          </div>
          <div className="user-data-container">
            <strong>{userData?.name || ''}</strong>
            <span>{userData?.login || ''}</span>
            <span>{userData?.email || ''}</span>
            <p>{userData?.bio || ''}</p>
          </div>
        </header>
        <nav className="user-details-data">
          <div
            onClick={() => setSelectedCard('repositories')}
            id="repositories-card"
            className={`user-details-card ${
              selectedCard === 'repositories' && 'selected-card'
            }`}
          >
            <strong className="user-details-card-amount">
              {loading ? '...' : userData?.public_repos || 0}
            </strong>
            <span className="user-details-card-text">
              {language.userDetailsPage.cardsText.repositories}
            </span>
          </div>
          <div
            onClick={() => setSelectedCard('followers')}
            id="followers-card"
            className={`user-details-card ${
              selectedCard === 'followers' && 'selected-card'
            }`}
          >
            <strong className="user-details-card-amount">
              {loading ? '...' : userData?.followers || 0}
            </strong>
            <span className="user-details-card-text">
              {language.userDetailsPage.cardsText.followers}
            </span>
          </div>
          <div
            onClick={() => setSelectedCard('following')}
            id="following-card"
            className={`user-details-card ${
              selectedCard === 'following' && 'selected-card'
            }`}
          >
            <strong className="user-details-card-amount">
              {loading ? '...' : userData?.following || 0}
            </strong>
            <span className="user-details-card-text">
              {language.userDetailsPage.cardsText.following}
            </span>
          </div>
        </nav>
        <div className="user-details-content">{whichListRender()}</div>
      </main>
    </Container>
  );
}

export default UserDetails;
