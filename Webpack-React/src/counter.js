import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	climb() {
		this.setState({
			count: this.state.count + 1
		});
	}

	render() {
		return (
			<div onClick={this.climb.bind(this)}>
				<h1>Coun: {this.state.count}</h1>
			</div>
		);
	}
}

export default Counter;
