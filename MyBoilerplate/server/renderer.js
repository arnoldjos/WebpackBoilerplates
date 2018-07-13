import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import Layout from '../src/components/Layout/Layout';
import Routes from '../src/pages/Routes';

export default ({ clientStats }) => (req, res) => {
	const context = {};
	const { js, styles } = flushChunks(clientStats, {
		chunkNames: flushChunkNames()
	});

	const app = renderToString(
		<StaticRouter location={req.path} context={context}>
			<Routes />
		</StaticRouter>
	);

	const html = `
		<!DOCTYPE html>
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
				var chunknames = ${JSON.stringify(
					flushChunks(clientStats, { chunkNames: flushChunkNames() })
				)}
			</script>
		</body>
		</html>
	`;
	res.send(html);
};