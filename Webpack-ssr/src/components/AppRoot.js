import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

export default class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		);
	}
}
