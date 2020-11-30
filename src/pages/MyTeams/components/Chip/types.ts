export interface Props {
  name: string;
  value: string | number;
  selected: string;
  setSelected: (name: string) => void;
}