import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';
import Loadable from 'react-loadable';

import './main.scss';

function render(Component) {
	Loadable.preloadReady().then(() => {
		ReactDOM.hydrate(
			<AppContainer>
				<Component />
			</AppContainer>,
			document.getElementById('root')
		);
	});
}
render(App);

if (module.hot) {
	module.hot.accept('./App', () => {
		const NewApp = require('./App').default;
		render(NewApp);
	});
}
