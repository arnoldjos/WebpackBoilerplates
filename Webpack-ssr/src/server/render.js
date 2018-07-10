import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Routes from '../components/Routes';

import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';

export default ({ clientStats }) => (req, res) => {
	const { js, styles } = flushChunks(clientStats, {
		chunkNames: flushChunkNames()
	});

	res.send(`
    <html>
      <head>
        <title>Link's Journal</title>
        ${styles}
      </head>
      <body>
        <div id="root">${renderToString(
					<StaticRouter location={req.url} context={{}}>
						<Routes />
					</StaticRouter>
				)}</div>
        ${js}
      </body>
    </html>
  `);
};
