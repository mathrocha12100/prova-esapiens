const cardTypes = ['followers', 'following', 'repositories', ''] as const;
import { GetGithubUserResponse } from '~/interfaces/user';

export type CardTypes = typeof cardTypes[number];

export interface UserDetailsProps {
  location: {
    state: GetGithubUserResponse;
  }
}

export interface UserDetailsPageParams {
  username: string;
}