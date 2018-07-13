import React from 'react';
import { Route } from 'react-router-dom';
import universal from 'react-universal-component';
import { Switch } from 'react-router';
import Spinner from '../components/UI/Spinner';
import Auxil from '../hoc/Auxil';

const UniversalComponent = universal(props => import(`./${props.page}`), {
	loading: <Spinner />,
	minDelay: 500
});

export default () => (
	<Auxil>
		<Navbar />
		<div className="content">
			<Switch>
				<Route exact path="/about">
					<UniversalComponent page="About" />
				</Route>
				<Route exact path="/">
					<UniversalComponent page="Home" />
				</Route>
			</Switch>
		</div>
	</Auxil>
);
