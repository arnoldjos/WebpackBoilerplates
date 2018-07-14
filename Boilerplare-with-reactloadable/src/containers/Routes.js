import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import Loadable from 'react-loadable';

import Loading from '../components/UI/Loading';

const loadableConfig = {
	loading: Loading,
	delay: 300,
	timeout: 10000
};

const Landing = Loadable({
	loader: () => import(/* webpackChunkName: "Landing" */ './Landing'),
	loading: Loading,
	delay: 300,
	timeout: 10000
});

const Contact = Loadable({
	loader: () => import(/* webpackChunkName: "Contact" */ './Contact'),
	loading: Loading,
	delay: 300,
	timeout: 10000
});

const About = Loadable({
	loader: () => import(/* webpackChunkName: "About" */ './About'),
	loading: Loading,
	delay: 300,
	timeout: 10000
});

export default () => (
	<Switch>
		<Route path="/about" component={About} />
		<Route path="/contact" component={Contact} />
		<Route exact path="/" component={Landing} />
	</Switch>
);
