import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyTeams from '~/pages/MyTeams';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={MyTeams} />
    </Switch>
  );
};

export default Routes;