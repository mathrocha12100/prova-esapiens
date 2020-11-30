import { AppContextProps } from '../../App';
import { FieldOptions, TableHeadFields } from '@components/Table/types';
import { TeamFields } from '@interfaces/teams';

export const cells = (language: AppContextProps['language']) => {
  const bodyCells: FieldOptions<TeamFields>[] = [
    {
      field: 'name',
      variant: 'text',
      alignment: 'left',
    },
    {
      field: 'venue_name',
      variant: 'text',
      alignment: 'left',
      actions: {
        delete: true,
        edit: true,
        share: true,
      }
    },
  ];

  const headCells: TableHeadFields<TeamFields>[] = [
    {
      field: 'name',
      label: language.content.myTeamsTable.head.name,
      alignment: 'left',
      sort: true,
    },
    {
      field: 'venue_name',
      label: language.content.myTeamsTable.head.description,
      alignment: 'left',
      sort: true,
    },
  ];

  return { bodyCells, headCells };
};
