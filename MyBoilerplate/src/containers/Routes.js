import React from 'react';
import { Route } from 'react-router-dom';
import universal from 'react-universal-component';
import { Switch } from 'react-router';
import Spinner from '../componenets/UI/Spinner';

const UniversalComponent = universal(props => import(`./${props.page}`), {
	loading: <Spinner />,
	minDelay: 500
});

export default () => (
	<Switch>
		<Route exact path="/">
			<UniversalComponent page="Home" />
		</Route>
		<Route path="/about">
			<UniversalComponent page="About" />
		</Route>
	</Switch>
);
