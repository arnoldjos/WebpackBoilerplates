import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import universal from 'react-universal-component';

import Spinner from '../components/UI/Spinner';

const UniversalComponent = universal(props => import(`./${props.page}`), {
	loading: Spinner,
	minDelay: 400
});

export default () => (
	<Switch>
		<Route path="/about">
			<UniversalComponent page="About" />
		</Route>
		<Route path="/contact">
			<UniversalComponent page="Contact" />
		</Route>
		<Route exact path="/">
			<UniversalComponent page="Landing" />
		</Route>
	</Switch>
);
