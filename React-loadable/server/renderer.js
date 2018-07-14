import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Capture } from 'react-loadable';
import flushChunks from 'webpack-flush-chunks';
import { matchPath } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '../src/store';
import Layout from '../src/components/Layout/Layout';
import routes from '../src/containers/Routes';

export default ({ clientStats }) => (req, res) => {
	const context = {};

	let modules = [];
	let promises = [];
	const store = configureStore({});

	routes.some(route => {
		const match = matchPath(req.path, route);

		if (match) {
			route.loadData ? promises.push(route.loadData(store)) : null;
		}
	});

	const renderApp = () => {
		return renderToString(
			<Capture report={moduleName => modules.push(moduleName)}>
				<Provider store={store}>
					<StaticRouter location={req.url} context={context}>
						<Layout />
					</StaticRouter>
				</Provider>
			</Capture>
		);
	};

	const template = () => {
		const app = renderApp();
		const chunkNames = modules.map(module => {
			module = module.replace('.', '');
			module = module.split(/\//).slice(-1)[0];
			return module;
		});
		const { js, styles } = flushChunks(clientStats, { chunkNames: chunkNames });

		return `
			<html lang="en">
			<head>
				<meta charset="UTF-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta http-equiv="X-UA-Compatible" content="ie=edge"/>
				<title>Document</title>
				${styles}
			</head>
			<body>
				<div id="root">${app}</div>
				${js}
				<script>
					window.INITIAL_STATE = ${JSON.stringify(store.getState())}
				</script>
			</body>
			</html>
		`;
	};

	Promise.all(promises).then(() => {
		res.send(template());
	});
};
