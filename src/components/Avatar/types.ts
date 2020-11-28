/**
 * component types
 */

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  imgPath: string;
  description?: string;
  size?: number;
  backgroundColor?: string;
  textColor?: string;
}

/***
 * styles types
 */

export interface ContainerProps {
  size?: number;
  backgroundColor?: string;
  textColor?: string;
}
