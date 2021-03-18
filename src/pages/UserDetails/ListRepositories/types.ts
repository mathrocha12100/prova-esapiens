import { GetGithubUserResponse } from '~/interfaces/user';

export type LoadingTypes = 'more' | 'initial';

export interface LoadingProps {
  type: LoadingTypes;
  isLoading: boolean;
}

export const defaultLoadingState: LoadingProps = {
  type: 'initial',
  isLoading: false,
};

export interface ListRepositoriesProps {
  userData: GetGithubUserResponse;
  loadingData: boolean;
}
