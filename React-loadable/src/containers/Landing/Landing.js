import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchLanding } from '../../store/actions';
import './Landing.scss';

class Home extends Component {
	componentDidMount() {
		this.props.fetchLanding();
	}

	render() {
		return (
			<div className="Home">
				{this.props.data.map(post => {
					return <div key={post.id}>{post.body}</div>;
				})}
			</div>
		);
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
)(Home);
