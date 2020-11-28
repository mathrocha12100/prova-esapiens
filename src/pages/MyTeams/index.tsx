import React, { useContext, useState, useEffect } from 'react';

import CommonLayout from '@layouts/Common';
import Card from '@components/Card';
import { AppContext } from '~/App';
import { AddButton } from './styles';
import { FaPlus } from 'react-icons/fa';
import Table from '@components/Table';
import api from '@services/api';

const test = [
  {
    id: 1,
    name: 'matheus',
  },
  {
    id: 2,
    name: 'douglas',
  },
];

const MyTeams: React.FC = () => {
  const [teams, setTeams] = useState();

  useEffect(() => {
    async function exec() {
      try {
        const response = await api.get('/leagues');
        setTeams(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    exec();
  }, []);

  const { language } = useContext(AppContext);

  return (
    <CommonLayout>
      {JSON.stringify(teams)}
      <Card
        button={
          <AddButton>
            <FaPlus size={'2vh'} color="#fff" />
          </AddButton>
        }
        header={{ title: language.content.myTeamsTite }}
      >
        <Table
          table={{
            array: test,
            bodyCells: [
              { field: 'id', variant: 'text' },
              { field: 'name', variant: 'text' },
            ],
            headCells: [
              { field: 'id', label: 'Código' },
              { field: 'name', label: 'Nome' },
            ],
          }}
        />
      </Card>
    </CommonLayout>
  );
};

export default MyTeams;
