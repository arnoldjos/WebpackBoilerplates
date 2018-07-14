import React from 'react';

import './Loading.scss';

export default props => {
	const spinner = (
		<div className="spinner">
			<div className="rect1" />
			<div className="rect2" />
			<div className="rect3" />
			<div className="rect4" />
			<div className="rect5" />
		</div>
	);

	if (props.error) {
		return (
			<div>
				Error! <button onClick={props.retry}>Retry</button>
			</div>
		);
	} else if (props.timedOut) {
		return (
			<div>
				Taking a long time... <button onClick={props.retry}>Retry</button>
			</div>
		);
	} else if (props.pastDelay) {
		return spinner;
	} else {
		return null;
	}
};
