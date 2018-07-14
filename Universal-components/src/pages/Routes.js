import { fetchLanding } from '../store/actions';

const routes = [
	{
		path: '/',
		page: 'Landing',
		exact: true,
		loadData: ({ dispatch }) => dispatch(fetchLanding())
	},
	{
		path: '/about',
		page: 'About'
	},
	{
		path: '/contact',
		page: 'Contact'
	}
];

export default routes;
