import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

export default () => {
	return (
		<div className="nav">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
		</div>
	);
};
