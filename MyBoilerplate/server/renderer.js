import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Capture } from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';

import Layout from '../src/components/Layout/Layout';

export default ({ clientStats }) => (req, res) => {
	const context = {};

	let modules = [];

	const app = renderToString(
		<StaticRouter location={req.url} context={context}>
			<Layout />
		</StaticRouter>
	);

	const { js, styles } = flushChunks(clientStats, {
		chunkNames: flushChunkNames()
	});

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
      <script>
        ${JSON.stringify(clientStats)}
      </script>
      <script>
        ${JSON.stringify(flushChunkNames())}
      </script>
		</body>
		</html>
	`;
	res.send(html);
};
