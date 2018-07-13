import React from 'react';

import Navbar from '../Navigation/Navbar';
import Routes from '../../pages/Routes';
import Auxil from '../../hoc/Auxil';

import './Layout.scss';

export default () => {
	return (
		<Auxil>
			<Navbar />
			<div className="content">
				<Routes />
			</div>
		</Auxil>
	);
};
