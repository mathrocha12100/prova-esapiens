import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CommonLayout from '@layouts/Common';
import Card from '@components/Card';
import { AppContext } from '~/App';
import { AddButton, Container, Top5Content } from './styles';
import { FaPlus } from 'react-icons/fa';
import Table from '@components/Table';
import { cells } from './tableConfig';
import { teams as teamsData } from './data';
import Chip from './components/Chip';
import Analytics from './components/Analytics';

const MyTeams: React.FC = () => {
  const history = useHistory();
  const [highestSelected, setHighestSelected] = useState('');
  const [lowestSelected, setLowestSelected] = useState('');
  const { language } = useContext(AppContext);
  const { bodyCells, headCells } = cells(language);

  return (
    <CommonLayout>
      <Container>
      <Card
        button={
          <AddButton onClick={() => history.push('/create-team')}>
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
      <div>
      <Card
        header={{ title: language.content.top5Title }}
      >
        <Top5Content>
          <div>
            {teamsData.map((team) => (
              <Chip key={team.team_id} name={team.name} value={team.team_id} selected={highestSelected} setSelected={setHighestSelected} />
            ))}
          </div>
          <div>
            {teamsData.map((team) => (
              <Chip key={team.team_id} name={team.name} value={team.team_id} selected={lowestSelected} setSelected={setLowestSelected} />
            ))}
          </div>
        </Top5Content>
      </Card>
      <Analytics
        highest={{
          label: language.content.analytics.highest.title,
          percent: '96%',
          player: 'Cristiano Ronaldo',
        }}
        lowest={{
          label: language.content.analytics.lowest.title,
          percent: '20%',
          player: 'Neymar',
        }}
      />
      </div>
      
      
      </Container>
    </CommonLayout>
  );
};

export default MyTeams;
