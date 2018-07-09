import express from 'express';
import path from 'path';

const app = express();
const webpack = require('webpack');
const config = require('../../config/webpack.dev');
const compiler = webpack(config);

const webpackDevMiddleware = require('webpack-dev-middleware')(
	compiler,
	config.devServer
);

const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);

app.use(webpackDevMiddleware);
app.use(webpackHotMiddleware);

app.use(express.static('dist'));

app.listen(8080, () => {
	console.log('Server is listening');
});
