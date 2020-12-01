export interface Props extends React.HTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
  rows?: number;
}