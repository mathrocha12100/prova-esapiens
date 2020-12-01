/**
 * component types
 */

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  imgPath: string;
  description?: string;
  size?: number;
  sizeUnit?: 'px' | 'vw' | 'vh';
  backgroundColor?: string;
  textColor?: string;
}

/***
 * styles types
 */

export interface ContainerProps {
  size?: number;
  sizeUnit?: 'px' | 'vw' | 'vh';
  backgroundColor?: string;
  textColor?: string;
}
