import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Spinner from '../components/UI/Spinner';

import Loadable from 'react-loadable';

const About = Loadable({
  loader: () => import(/* webpackChunkName: "About" */ './About/About'),
  loading: Spinner,
  delay: 200
});

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "About" */ './Home/Home'),
  loading: Spinner,
  delay: 100
});

export default () => (
  <Switch>
    <Route path="/about" component={About} />
    <Route exact path="/" component={Home} />
  </Switch>
);
