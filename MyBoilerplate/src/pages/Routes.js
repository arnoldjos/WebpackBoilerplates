import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Spinner from '../components/UI/Spinner';

import Loadable from 'react-loadable';

const Home = Loadable({
	loader: () => import('./Home'),
	loading: Spinner,
	delay: 300
});
const About = Loadable({
	loader: () => import('./About'),
	loading: <Spinner />,
	delay: 300
});

export default () => (
	<Switch>
		<Route exact path="/about" component={Home} />
		<Route exact path="/" componenent={About} />
	</Switch>
);
