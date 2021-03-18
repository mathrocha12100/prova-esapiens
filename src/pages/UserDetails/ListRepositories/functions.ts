import { GetUserRepositoriesResponse } from '~/interfaces/user';
import api from '~/services/api';
import { mountApiQueryParams } from '~/functions/apiFunctions';
import { LoadingProps, LoadingTypes } from './types';
import { sortArray } from '~/functions/arrayFunctions';

/**
 *  função pra buscar os repositoris do usuário
 *
 * @param githubUsername - Nome do usuário do github
 * @param page - página da listagem
 * @param order - ordenação da listagem
 * @param loadingType - tipo de loading
 * @param setRepositories - função para atualizar os repositoris salvos no estado
 * @param setLoading - função para atualizar o loading
 * @param setPage - função pra alterar a página salva da listagem
 * @param setCanLoadMore - função para saber se pode carregar mais repositoris
 * @param setNotFound - função para alterar o valor do notFound
 */
export async function getUserRepositories(
  githubUsername: string,
  page: number,
  order: 'asc' | 'desc',
  loadingType: LoadingTypes,
  setRepositories: (arg: GetUserRepositoriesResponse) => void,
  setLoading: (arg: LoadingProps) => void,
  setPage: (arg: number) => void,
  setNotFound: (arg: boolean) => void,
) {
  try {
    setLoading({ isLoading: true, type: loadingType });
    const queryParams = mountApiQueryParams(
      {
        page: page,
        order,
        per_page: 10,
      },
      true
    );

    const response = await api.get<GetUserRepositoriesResponse>(
      `/users/${githubUsername}/repos${queryParams}`
    );

    let sorted: GetUserRepositoriesResponse;
    if (order === 'asc') {
      sorted = response.data.sort((a, b) => sortArray(a, b, 'stargazers_count'));
    } else {
      sorted = response.data.sort((a, b) => sortArray(b, a, 'stargazers_count'));
    }

    if (response.data.length <= 0) {
      setNotFound(true);
    }

    setRepositories(sorted);
    setPage(page);
    setLoading({ isLoading: false, type: loadingType });
  } catch (err) {
    setLoading({ isLoading: false, type: loadingType });
  }
}

/**
 * função pra ordenar a listagem usando logica
 */
export function sortRepositories(
  repositories: GetUserRepositoriesResponse,
  order: 'asc' | 'desc',
  field: string,
  setOrder: (arg: 'asc' | 'desc') => void,
  setRepositores: (arg: GetUserRepositoriesResponse) => void
) {
  let sorted: GetUserRepositoriesResponse;
  if (order === 'asc') {
    sorted = repositories.sort((a, b) => sortArray(b, a, field));
  } else {
    sorted = repositories.sort((a, b) => sortArray(a, b, field));
  }
  setOrder(order === 'asc' ? 'desc' : 'asc');
  setRepositores(sorted);
}
