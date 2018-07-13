import React from 'react';

import './Spinner.scss';

export default () => {
	return (
		<div className="Spinner">
			<div className="lds-ring">
				<div />
				<div />
				<div />
				<div />
			</div>
		</div>
	);
};
