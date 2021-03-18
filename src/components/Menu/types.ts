export interface Option {
  key: any;
  label: string;
  onClick: () => void;
  className?: string;
}

export interface Props {
  options: Option[]; // opções de menu item
  anchor: JSX.Element;
  anchorClassName: string; // classe do componente de achor
  open: boolean;
  onClose: () => void; // função de quando o menu item fecha
}

export interface ContainerProps {
  open?: boolean;
}
