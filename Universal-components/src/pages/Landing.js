import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchLanding } from '../store/actions';
import '../styles/Landing.scss';
import Loading from '../components/UI/Loading';

class Landing extends Component {
	componentDidMount() {
		this.props.fetchLanding();
	}

	render() {
		let posts = <Loading />;

		if (this.props.data) {
			posts = this.props.data.map(post => {
				return (
					<div key={post.id}>
						<div className="Home__Image">
							<img
								src="https://newevolutiondesigns.com/images/freebies/fantasy-wallpaper-40.jpg"
								alt="image"
							/>
						</div>
						<p>{post.body}</p>
					</div>
				);
			});
		}

		return <div className="Home">{posts}</div>;
	}
}

const mapStateToProps = state => ({
	data: state.landing.data
});

const mapDispatchToProps = dispatch => ({
	fetchLanding: () => dispatch(fetchLanding())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Landing);
