import React, { useState, useEffect, useContext } from 'react';
import {
  LoadingProps,
  defaultLoadingState,
  ListRepositoriesProps,
} from './types';
import { ListFollowingContainer, CardContainer } from './styles';
import { GetUserFolloweresResponse } from '~/interfaces/user';
import { getUserFollowers } from './functions';
import Pagination from '~/components/Pagination';
import Loading from '~/components/Loading';
import { AppContext } from '~/App';
import NotFound from '../components/NotFound';
import { FaFrown } from 'react-icons/fa';

function ListFollowing(props: ListRepositoriesProps) {
  const [loading, setLoading] = useState<LoadingProps>(defaultLoadingState);
  const [followings, setFollowings] = useState<GetUserFolloweresResponse>([]);
  const [notFound, setNotFound] = useState(false);
  const [page, setPage] = useState(0);
  const { userData, loadingData } = props;
  const { language } = useContext(AppContext);

  useEffect(() => {
    if (userData) {
      getUserFollowers(
        userData.login,
        1,
        'initial',
        setFollowings,
        setLoading,
        setPage,
        setNotFound,
      );
    }
  }, [userData]);

  function changePage(page: number) {
    if (userData) {
      getUserFollowers(
        userData.login,
        page,
        'initial',
        setFollowings,
        setLoading,
        setPage,
        setNotFound,
      );
    }
  }

  return (
    <ListFollowingContainer>
      <header className="list-followers-header">
        <h3 className="list-followers-title">
          {language.userDetailsPage.cardsText.following}
        </h3>
      </header>
      {notFound  ? (
        <NotFound
          icon={<FaFrown size={42} />}
          message={language.userDetailsPage.following.notFoundMessage}
        />
      ) : loading.isLoading && loading.type === 'initial' ? (
        <Loading loadingIconColor="#AAA" loadingIconSize={42} />
      ) : (
        <>
          <main className="list-followers-content">
            {followings.map((user) => (
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
              amountOfPages={Math.ceil((userData?.following || 0) / 10)}
              onPageChange={(newPage) => changePage(newPage)}
              loading={loading.isLoading}
            />
          </footer>
        </>
      )}

      <div className="space-bottom"></div>
    </ListFollowingContainer>
  );
}

export default ListFollowing;
