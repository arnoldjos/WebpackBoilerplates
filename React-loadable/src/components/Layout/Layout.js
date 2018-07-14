import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from '../Navigation/Navbar';
import Auxil from '../../hoc/Auxil';
import routes from '../../containers/Routes';

import './Layout.scss';

export default () => {
	return (
		<Auxil>
			<Navbar />
			<div className="content">
				<Switch>
					{routes.map(route => <Route {...route} key={route.path} />)}
				</Switch>
			</div>
		</Auxil>
	);
};
