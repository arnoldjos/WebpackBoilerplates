import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Loadable from 'react-loadable';

import Spinner from '../components/UI/Spinner';

const Landing = Loadable({
	loader: () => import(/* webpackChunkName: "Landing" */ './Landing'),
	loading: Spinner
});

const Contact = Loadable({
	loader: () => import(/* webpackChunkName: "Contact" */ './Contact'),
	loading: Spinner
});

const About = Loadable({
	loader: () => import(/* webpackChunkName: "About" */ './About'),
	loading: Spinner
});

export default () => (
	<Switch>
		<Route path="/about" component={About} />
		<Route path="/contact" component={Contact} />
		<Route exact path="/" component={Landing} />
	</Switch>
);
