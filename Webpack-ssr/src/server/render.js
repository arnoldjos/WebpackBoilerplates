import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import Routes from '../components/Routes';
import { Provider } from 'react-redux';
import { flushChunkNames } from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';

import store from '../store';

export default ({ clientStats }) => (req, res) => {
	const site = req.hostname.split('.')[0];
	const context = { site };

	const app = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.url} context={context}>
				<Routes />
			</StaticRouter>
		</Provider>
	);

	const names = flushChunkNames().concat([`css/${site}-theme-css`]);
	const { js, styles, cssHash } = flushChunks(clientStats, {
		chunkNames: names
	});

	res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        ${styles}
      </head>
      <body>
        <div id="react-root">${app}</div>
        ${js}
      </body>
    </html>
  `);
};
