export type LoadingTypes = 'initial' | 'more';

export interface Loading {
  type: LoadingTypes;
  isLoading: boolean;
}