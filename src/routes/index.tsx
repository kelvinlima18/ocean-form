import React from 'react';
import { Router, Route } from 'react-router-dom';

import { Banner } from '../pages/Banner';
import { DevList } from '../pages/DevList';
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { Skills } from '../pages/Skills';
import { Success } from '../pages/Success';
import history from '../utils/history';

export const Routes: React.FC = () => {
  return (
    <Router history={history}>
      <Route path="/" exact component={Banner} />
      <Route path="/home" component={Home} />
      <Route path="/dev/register" component={Register} />
      <Route path="/dev/skills" component={Skills} />
      <Route path="/dev/success" component={Success} />
      <Route path="/dev/list" component={DevList} />
    </Router>
  );
};
