export interface Option {
  key: any;
  label: string;
  onClick: () => void,
}

export interface Props {
  options: Option[];
  anchor: JSX.Element;
  open?: boolean;
}