export interface Option {
  id: number | string;
  label: string;
}

export interface Props {
  name: string;
  options: Option[];
  label: string;
}