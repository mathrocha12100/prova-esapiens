import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyTeams from '~/pages/MyTeams';
import CreateTeam from '~/pages/CreateTeam';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={MyTeams} />
      <Route path="/create-team" exact component={CreateTeam} />
    </Switch>
  );
};

export default Routes;