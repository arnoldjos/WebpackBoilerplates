import React, { Component } from 'react';
import Navbar from './componenets/Navigation/Navbar';

import Routes from './containers/Routes';
import { BrowserRouter } from 'react-router-dom';
import Auxil from './hoc/Auxil';
import './App.scss';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Auxil>
					<Navbar />
					<div className="content">
						<Routes />
					</div>
				</Auxil>
			</BrowserRouter>
		);
	}
}

export default App;
