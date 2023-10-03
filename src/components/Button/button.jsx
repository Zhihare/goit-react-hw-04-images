import React, { Component } from 'react'
import { ButtonLoadMore } from './button.style'

export default class Button extends Component {
	loadMoreSubmit = () => {
		this.props.onloadMore();
	}

	render() {
		return (
			<ButtonLoadMore onClick={this.loadMoreSubmit}
			>Load more</ButtonLoadMore>
		)
	}
}
