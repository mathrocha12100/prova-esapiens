import { GetUserFolloweresResponse } from '~/interfaces/user';
import api from '~/services/api';
import { mountApiQueryParams } from '~/functions/apiFunctions';
import { LoadingProps, LoadingTypes } from './types';

/**
 *  função pra buscar os repositoris do usuário
 *
 * @param githubUsername - Nome do usuário do github
 * @param page - página da listagem
 * @param order - ordenação da listagem
 * @param loadingType - tipo de loading
 * @param setFollowers - função para atualizar os repositoris salvos no estado
 * @param setLoading - função para atualizar o loading
 * @param setPage - função pra alterar a página salva da listagem
 * @param setNotFound - função para altear o valor do estado notFound
 */
export async function getUserFollowers(
  githubUsername: string,
  page: number,
  loadingType: LoadingTypes,
  setFollowers: (arg: GetUserFolloweresResponse) => void,
  setLoading: (arg: LoadingProps) => void,
  setPage: (arg: number) => void,
  setNotFound: (arg: boolean) => void,
) {
  try {
    setLoading({ isLoading: true, type: loadingType });
    const queryParams = mountApiQueryParams(
      {
        page: page,
        per_page: 10,
      },
      true
    );

    const response = await api.get<GetUserFolloweresResponse>(
      `/users/${githubUsername}/following${queryParams}`
    );
    if (response.data.length <= 0) {
      setNotFound(true);
    }

    setFollowers(response.data || []);
    setPage(page);
    setLoading({ isLoading: false, type: loadingType });
  } catch (err) {
    setLoading({ isLoading: false, type: loadingType });
  }
}
