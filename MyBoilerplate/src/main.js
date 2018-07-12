import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';

import './main.scss';

function render(Component) {
	ReactDOM.hydrate(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('root')
	);
}
render(App);

if (module.hot) {
	module.hot.accept('./App', () => {
		const NewApp = require('./App').default;
		render(NewApp);
	});
}
