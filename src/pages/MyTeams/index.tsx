import React, { useContext, useState } from 'react';

import CommonLayout from '@layouts/Common';
import Card from '@components/Card';
import { AppContext } from '~/App';
import { AddButton, Container, Top5Content } from './styles';
import { FaPlus } from 'react-icons/fa';
import Table from '@components/Table';
import { cells } from './tableConfig';
import { teams as teamsData } from './data';
import Chip from './components/Chip';

const MyTeams: React.FC = () => {
  const [highestSelected, setHighestSelected] = useState('');
  const [lowestSelected, setLowestSelected] = useState('');
  const { language } = useContext(AppContext);
  const { bodyCells, headCells } = cells(language);

  return (
    <CommonLayout>
      <Container>
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
            array: teamsData,
            bodyCells,
            headCells,
          }}
        />
      </Card>
      <Card
        header={{ title: language.content.top5Title }}
      >
        <Top5Content>
          <div>
            {/* {teams.map} */}
          </div>
          <div>
            
          </div>
        </Top5Content>
      </Card>
      
      </Container>
    </CommonLayout>
  );
};

export default MyTeams;
