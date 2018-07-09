import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './components/AppRoot';
import { AppContainer } from 'react-hot-loader';
import Data from './data/bio';

function render(Component) {
  ReactDOM.render(
    <h1 className="test">
      <AppContainer>
        <Component heading={Data.heading} bio={Data.bioText} />
      </AppContainer>
    </h1>,
    document.getElementById('root')
  );
}

render(AppRoot);

if (module.hot) {
  module.hot.accept('./components/AppRoot.js', () => {
    const NewAppRoot = require('./components/AppRoot').default;
    render(NewAppRoot);
  });
}
