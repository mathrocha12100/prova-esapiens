import React, { useState, useEffect, useContext } from 'react';
import {
  LoadingProps,
  defaultLoadingState,
  ListRepositoriesProps,
} from './types';
import { ListFollowersContainer, CardContainer } from './styles';
import { GetUserFolloweresResponse } from '~/interfaces/user';
import { getUserFollowers } from './functions';
import Pagination from '~/components/Pagination';
import Loading from '~/components/Loading';
import { AppContext } from '~/App';
import NotFound from '../components/NotFound';
import { FaFrown } from 'react-icons/fa';

function ListFollowers(props: ListRepositoriesProps) {
  const [loading, setLoading] = useState<LoadingProps>(defaultLoadingState);
  const [followers, setFollowers] = useState<GetUserFolloweresResponse>([]);
  const [notFound, setNotFound] = useState(false);
  const [page, setPage] = useState(0);
  const { language } = useContext(AppContext);
  const { userData, loadingData } = props;

  useEffect(() => {
    if (userData) {
      getUserFollowers(
        userData.login,
        1,
        'initial',
        setFollowers,
        setLoading,
        setPage,
        setNotFound
      );
    }
  }, [userData]);

  function changePage(page: number) {
    if (userData) {
      getUserFollowers(
        userData.login,
        page,
        'initial',
        setFollowers,
        setLoading,
        setPage,
        setNotFound
      );
    }
  }

  return (
    <ListFollowersContainer>
      <header className="list-followers-header">
        <h3 className="list-followers-title">
          {language.userDetailsPage.cardsText.followers}
        </h3>
      </header>
      {notFound ? (
        <NotFound
          icon={<FaFrown size={42} />}
          message={language.userDetailsPage.following.notFoundMessage}
        />
      ) : loading.isLoading && loading.type === 'initial' ? (
        <div className="loading-wrapper">
          <Loading loadingIconColor="#AAA" loadingIconSize={42} />
        </div>
      ) : (
        <>
          <main className="list-followers-content">
            {followers.map((user) => (
              <CardContainer
                onClick={() => {
                  window.location.href = user.html_url;
                }}
                key={user.id}
              >
                <img
                  className="follower-card-avatar"
                  src={user.avatar_url}
                  alt=""
                />

                <strong className="follower-card-title">{user.login}</strong>
              </CardContainer>
            ))}
          </main>
          <footer className="list-followers-footer">
            <Pagination
              page={page}
              amountOfPages={Math.ceil((userData?.followers || 0) / 10)}
              onPageChange={(newPage) => changePage(newPage)}
              loading={loading.isLoading}
            />
          </footer>
        </>
      )}

      <div className="space-bottom"></div>
    </ListFollowersContainer>
  );
}

export default ListFollowers;
