import React, { useState, useContext } from 'react';
import { AppContext } from '~/App';
import { Props } from './types';
import { FaSortUp, FaSortDown, FaTrash, FaShareAlt, FaPen } from 'react-icons/fa';
import { sort as sortFunction } from './functions';
import { Container } from './styles';
import Tooltip from '../Tooltip';

const Table: React.FC<Props> = ({ table }) => {
  const { array: arr, bodyCells, headCells } = table;
  const { language } = useContext(AppContext);
  const [array, setArray] = useState(arr);

  return (  
    <Container>
      <thead>
        <tr>
          {headCells.map((cell) => (
            <th
              style={{ textAlign: cell.alignment || 'center' }}
              key={cell.field as string}
            >
              <div>
                <strong>{cell.label}</strong>
                <div className="buttons">
                  <button onClick={() => sortFunction(cell.field, 'asc', array, setArray)}><FaSortUp size="1.2vh"/></button>
                  <button onClick={() => sortFunction(cell.field, 'desc', array, setArray)}><FaSortDown size="1.2vh" /></button>
                </div>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {array.map((row) => (
          <tr key={JSON.stringify(row)}>
            {bodyCells.map((body) => (
              <td key={`${body.field}/${row[body.field as string]}`} style={{ textAlign: body.alignment || 'center' }}>
                <div>
                  <span>{row[body.field as string]}</span>
                  {body.actions && (
                    <div className="actionsButtons">
                      {body.actions.delete && <Tooltip tooltipText={language.content.myTeamsTable.body.actionsButtons.delete} ><button><FaTrash /> </button></Tooltip>}
                      {body.actions.share && <Tooltip tooltipText={language.content.myTeamsTable.body.actionsButtons.share}><button><FaShareAlt/> </button></Tooltip>}
                      {body.actions.edit && <Tooltip tooltipText={language.content.myTeamsTable.body.actionsButtons.edit}><button><FaPen /> </button></Tooltip>}
                    </div>
                  )}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Container>
  );
};

export default Table;
