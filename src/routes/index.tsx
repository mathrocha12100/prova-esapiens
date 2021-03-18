import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainPage from '~/pages/MainPage';
import UserDetails from '~/pages/UserDetails';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/user/:username" component={UserDetails} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
