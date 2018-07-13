import React, { Component } from 'react';

import '../styles/Home.scss';

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<div className="Home__Image">
					<img
						src="https://newevolutiondesigns.com/images/freebies/fantasy-wallpaper-40.jpg"
						alt="image"
					/>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
					blanditiis possimus repudiandae cum delectus reprehenderit impedit
					veniam! Nostrum, obcaecati sequi!
				</p>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat
					minima ut quam rem. Non rem illum facere perferendis modi pariatur!
				</p>
				<div className="Home__Image">
					<img
						src="https://newevolutiondesigns.com/images/freebies/fantasy-wallpaper-40.jpg"
						alt="image"
					/>
				</div>
			</div>
		);
	}
}

export default Home;
