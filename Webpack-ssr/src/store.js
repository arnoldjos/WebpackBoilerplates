import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './store/reducers';
import thunk from 'redux-thunk';

const composeEnhencers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose;

const enhancer = composeEnhencers(applyMiddleware(thunk));

export default createStore(reducers, {}, enhancer);
