import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';

import configureStore from './store';

const store = configureStore(window.INITIAL_STATE);

import './main.scss';

const render = async Component => {
	await Loadable.preloadReady();
	ReactDOM.hydrate(
		<Provider store={store}>
			<AppContainer>
				<Component />
			</AppContainer>
		</Provider>,
		document.getElementById('root')
	);
};
render(App);

if (module.hot) {
	module.hot.accept('./App', () => {
		const NewApp = require('./App').default;
		render(NewApp);
	});
}
