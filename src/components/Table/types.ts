const variants = ['text'] as const;

export interface TableHeadProps {
  id: string | number;
  label: string;
}

export interface TableHeadFields<T = string | number | boolean> {
  field: T;
  label: string;
  alignment?: 'left' | 'center' | 'right';
  sort?: boolean;
}

export interface FieldOptions<T = string | number | boolean> {
  field: T;
  variant: typeof variants[number];
  alignment?: 'left' | 'center' | 'right';
}

export interface Array<T = string | number | boolean> {
  field: T;
}

export interface Props {
  table: {
    array: any[];
    headCells: TableHeadFields[];
    bodyCells: FieldOptions[];
  };
}
