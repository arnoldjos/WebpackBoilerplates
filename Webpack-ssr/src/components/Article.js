import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchArticle } from '../store/actions/';
import '../css/Article.css';
import NotFound from './NotFound';

class Article extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchArticle(this.props.site, this.props.match.params.slug);
	}

	render() {
		const siteConfig = require(`../../data/${this.props.site}/siteConfig`);
		import(`../css/${this.props.site}/theme.css`);
		// const MarkdownData = require(`../../data/${props.site}/${
		// 	props.match.params.slug
		// }.md`);
		// const posterStyle = {
		// 	backgroundImage: `url(${MarkdownData.posterImage}`
		// };
		return (
			<div>
				<div className="Article">
					{/* <div className="poster" style={posterStyle} /> */}
					<h1>{this.props.text}</h1>
					<div
						className="content"
						dangerouslySetInnerHTML={{ __html: this.props.content }}
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	text: state.article.content,
	content: state.article.content
});

const mapDispatchToProps = dispatch => ({
	fetchArticle: (site, slug) => dispatch(fetchArticle(site, slug))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Article);
