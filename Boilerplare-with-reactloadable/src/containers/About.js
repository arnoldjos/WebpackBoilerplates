import React, { Component } from 'react';

import '../styles/About.scss';

class About extends Component {
	render() {
		return (
			<div className="About">
				<div className="banner">
					<img
						src="http://s1.1zoom.me/b3963/870/The_Legend_of_Zelda_Mountains_Warriors_Scenery_516269_2560x1080.jpg"
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
			</div>
		);
	}
}

export default About;
