import React, { useState, useEffect, useContext } from 'react';
import {
  LoadingProps,
  defaultLoadingState,
  ListRepositoriesProps,
} from './types';
import { ListRepositoriesContainer, CardContainer } from './styles';
import { GetUserRepositoriesResponse } from '~/interfaces/user';
import { getUserRepositories, sortRepositories } from './functions';
import { FaStar, FaNetworkWired } from 'react-icons/fa';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
import Pagination from '~/components/Pagination';
import Loading from '~/components/Loading';
import NotFound from '../components/NotFound';
import { FaFrown } from 'react-icons/fa';
import { AppContext } from '~/App';

function ListRepositories(props: ListRepositoriesProps) {
  const [loading, setLoading] = useState<LoadingProps>(defaultLoadingState);
  const [repositories, setRepositories] = useState<GetUserRepositoriesResponse>(
    []
  );
  const [notFound, setNotFound] = useState(false);
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const [page, setPage] = useState(0);
  const { userData, loadingData } = props;
  const { language } = useContext(AppContext);

  useEffect(() => {
    if (userData) {
      getUserRepositories(
        userData.login,
        1,
        order,
        'initial',
        setRepositories,
        setLoading,
        setPage,
        setNotFound
      );
    }
  }, [userData]);

  function changePage(page: number) {
    if (userData) {
      getUserRepositories(
        userData.login,
        page,
        order,
        'initial',
        setRepositories,
        setLoading,
        setPage,
        setNotFound
      );
    }
  }

  function changeOrder() {
    if (userData && repositories.length > 0) {
      sortRepositories(
        repositories,
        order,
        'stargazers_count',
        setOrder,
        setRepositories
      );
    }
  }

  return (
    <ListRepositoriesContainer>
      <header className="list-repos-header">
        <h3 className="list-repos-title">
          {language.userDetailsPage.cardsText.repositories}
        </h3>

        <div className="filters">
          <button onClick={changeOrder} className="filter-button">
            {order === 'asc' ? <FaArrowUp /> : <FaArrowDown />}
          </button>
        </div>
      </header>
      {notFound ? (
        <NotFound
          icon={<FaFrown size={42} />}
          message={language.userDetailsPage.repositories.notFoundMessage}
        />
      ) : loading.isLoading && loading.type === 'initial' ? (
        <Loading loadingIconColor="#AAA" loadingIconSize={42} />
      ) : (
        <>
          <main className="list-repos-content">
            {repositories.map((repo) => (
              <CardContainer
                onClick={() => {
                  window.location.href = repo.html_url;
                }}
                key={repo.id}
                className={`repository-card`}
              >
                <strong className="repository-card-title">{repo.name}</strong>
                <p className="repository-card-description">
                  {repo.description}
                </p>
                <ul className="general-data-content">
                  {repo.language && <li>{repo.language}</li>}
                  <li className="repository-stars">
                    <FaStar />
                    {repo.stargazers_count || 0}
                  </li>
                  <li>
                    <FaNetworkWired />
                    {repo.forks_count || 0}
                  </li>
                </ul>
              </CardContainer>
            ))}
          </main>
          <footer className="list-repos-footer">
            <Pagination
              page={page}
              amountOfPages={Math.ceil((userData?.public_repos || 0) / 10)}
              onPageChange={(newPage) => changePage(newPage)}
              loading={loading.isLoading}
            />
          </footer>
        </>
      )}

      <div className="space-bottom"></div>
    </ListRepositoriesContainer>
  );
}

export default ListRepositories;
