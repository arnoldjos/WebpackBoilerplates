import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';
import { AppContainer } from 'react-hot-loader';

function render(Component) {
	ReactDOM.render(
		<h1 className="test">
			<AppContainer>
				<Component />
			</AppContainer>
		</h1>,
		document.getElementById('root')
	);
}

render(Counter);

if (module.hot) {
	module.hot.accept('./counter.js', () => {
		const NewCounter = require('./counter').default;
		render(NewCounter);
	});
}
