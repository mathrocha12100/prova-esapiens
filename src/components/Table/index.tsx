import React from 'react';
import { Props } from './types';
import { FaSortUp, FaSortDown } from 'react-icons/fa';

import { Container } from './styles';

const Table: React.FC<Props> = ({ table }) => {
  const { array, bodyCells, headCells } = table;

  return (
    <Container>
      <thead>
        <tr>
          {headCells.map((cell) => (
            <th
              style={{ textAlign: cell.alignment || 'center' }}
              key={cell.field as string}
            >
              {cell.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {array.map((row) => (
          <tr>
            {bodyCells.map((body) => (
              <td style={{ textAlign: body.alignment || 'center' }}>
                {row[body.field as string]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Container>
  );
};

export default Table;
