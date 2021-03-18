import api from '~/services/api';
import { GetGithubUserResponse } from '~/interfaces/user';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

/**
 * função para buscar os dados de um usuário do github
 *
 * @param githubUsername - nome do usuário do github
 * @param setLoading - função pra atualizar o estado de loading
 */
export async function findGithubUser(
  githubUsername: string,
  setLoading: (arg: boolean) => void,
  history: ReturnType<typeof useHistory>,
  setUserData?: (arg: GetGithubUserResponse) => void,
  setNotFound?: (arg: boolean) => void
) {
  try {
    setLoading(true);
    const response = await api.get<GetGithubUserResponse>(
      `/users/${githubUsername}`
    );

    setLoading(false);

    if (setUserData) {
      setUserData(response.data);
    } else {
      history.push(`/user/${githubUsername}`, response.data);
    }
  } catch (err) {
    setLoading(false);
    if (err.response) {
      if (err.response.status === 404) {
        toast.error('Usuário não encontrado');
        if (setNotFound) {
          setNotFound(true);
        }
      } else {
        toast.error('Ocorreu um erro inesperado');
      }
    } else {
      toast.error('Ocorreu um erro inesperado');
    }
  }
}
