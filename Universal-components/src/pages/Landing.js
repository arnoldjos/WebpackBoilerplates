import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { fetchLanding } from '../store/actions';
import '../styles/Landing.scss';
import Auxil from '../hoc/Auxil';

class Landing extends Component {
	state = {
		loadedItems: []
	};

	componentDidMount() {
		this.props.fetchLanding();
	}

	onLoad = newItem => {
		const newItems = [...this.state.loadedItems, newItem];

		this.setState({
			loadedItems: newItems
		});
	};

	render() {
		let posts = (
			<Auxil>
				<div className="image-placeholder">&nbsp;</div>
				<div className="content-placeholder">
					<div className="content-placeholder__text">&nbsp;</div>
					<div className="content-placeholder__text">&nbsp;</div>
					<div className="content-placeholder__text">&nbsp;</div>
				</div>
			</Auxil>
		);

		let loadImages = this.props.data.map(post => {
			return (
				<div className="Hidden" key={post.id}>
					<img
						onLoad={() => this.onLoad(post)}
						src="https://newevolutiondesigns.com/images/freebies/fantasy-wallpaper-40.jpg"
						alt="Image"
					/>
				</div>
			);
		});

		return (
			<div className="Home">
				{this.props.data.length > this.state.loadedItems.length ? (
					<Auxil>
						<div className="image-placeholder">&nbsp;</div>
						<div className="content-placeholder">
							<div className="content-placeholder__text">&nbsp;</div>
							<div className="content-placeholder__text">&nbsp;</div>
							<div className="content-placeholder__text">&nbsp;</div>
						</div>
						<div className="image-placeholder">&nbsp;</div>
						<div className="content-placeholder">
							<div className="content-placeholder__text">&nbsp;</div>
							<div className="content-placeholder__text">&nbsp;</div>
							<div className="content-placeholder__text">&nbsp;</div>
						</div>
						<div className="image-placeholder">&nbsp;</div>
						<div className="content-placeholder">
							<div className="content-placeholder__text">&nbsp;</div>
							<div className="content-placeholder__text">&nbsp;</div>
							<div className="content-placeholder__text">&nbsp;</div>
						</div>
					</Auxil>
				) : (
					<TransitionGroup className="post">
						{this.state.loadedItems.map(post => {
							return (
								<CSSTransition
									classNames="fade"
									timeout={300}
									key={post.id}
									appear={true}
								>
									<Auxil>
										<div className="Home__Image">
											<img
												src="https://newevolutiondesigns.com/images/freebies/fantasy-wallpaper-40.jpg"
												alt="image"
											/>
										</div>
									</Auxil>
								</CSSTransition>
							);
						})}
					</TransitionGroup>
				)}
				{loadImages}
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
)(Landing);
