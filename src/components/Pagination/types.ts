export interface PaginationProps {
  amountOfPages: number;
  page: number;
  onPageChange: (arg: number) => void;
  loading?: boolean;
}
