import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Capture } from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';

import stats from '../dist/react-loadable.json';
import Layout from '../src/components/Layout/Layout';

export default ({ clientStats }) => (req, res) => {
	const context = {};

	let modules = [];

	const app = renderToString(
		<StaticRouter location={req.url} context={context}>
			<Capture report={moduleName => modules.push(moduleName)}>
				<Layout />
			</Capture>
		</StaticRouter>
	);

	let bundles = getBundles(stats, modules);

	const chunkNames = modules.map(module => {
		module = module.replace('.', '');
		return module.replace(/\//, '');
	});
	const { js, styles } = flushChunks(clientStats, { chunkNames: chunkNames });

	const html = `
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
		</body>
		</html>
	`;
	res.send(html);
};
