import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Spinner from '../components/UI/Spinner';

import Loadable from 'react-loadable';

const About = Loadable({
  loader: () => import('./About/About'),
  loading: Spinner,
  delay: 200
});

const Home = Loadable({
  loader: () => import('./Home/Home'),
  loading: Spinner,
  delay: 200
});

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
  </Switch>
);
