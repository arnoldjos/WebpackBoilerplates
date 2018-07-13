import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Capture } from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

import stats from '../dist/react-loadable.json';
import Layout from '../src/components/Layout/Layout';

export default () => (req, res) => {
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

  let styles = bundles.filter(bundle => bundle.file.endsWith('.css'));
  let scripts = bundles.filter(bundle => bundle.file.endsWith('.js'));

  const html = ` 
	<html lang="en">
		<head>
			<meta charset="UTF-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<meta http-equiv="X-UA-Compatible" content="ie=edge"/>
			<title>Document</title>
			<link href="/main.css" rel="stylesheet" />
			${styles
        .map(style => {
          return `<link href="${style.publicPath}" rel="stylesheet"/>`;
        })
        .join('\n')}
				
		</head>
		<body>
			<div id="root">${app}</div>
			
			<script src="/vendor-bundle.js"></script>
			${scripts
        .map(script => {
          return `<script src="${script.publicPath}"></script>`;
        })
        .join('\n')}
			<script src="/main-bundle.js"></script>
		</body>
		</html>
	`;
  res.send(html);
};
