import Loadable from 'react-loadable';

import { fetchLanding } from '../store/actions';
import Loading from '../components/UI/Loading';

const Landing = Loadable({
	loader: () => import(/* webpackChunkName: "Landing" */ './Landing/Landing'),
	loading: Loading,
	delay: 300,
	timeout: 10000
});

const Contact = Loadable({
	loader: () => import(/* webpackChunkName: "Contact" */ './Contact/Contact'),
	loading: Loading,
	delay: 300,
	timeout: 10000
});

const About = Loadable({
	loader: () => import(/* webpackChunkName: "About" */ './About/About'),
	loading: Loading,
	delay: 300,
	timeout: 10000
});

const routes = [
	{
		path: '/',
		component: Landing,
		exact: true,
		loadData: ({ dispatch }) => dispatch(fetchLanding())
	},
	{
		path: '/about',
		component: About
	},
	{
		path: '/contact',
		component: Contact
	}
];

export default routes;
