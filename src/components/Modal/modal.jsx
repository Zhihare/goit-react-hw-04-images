import React, { Component } from 'react'
import { ModalOverlay, Modalwindow } from './modalStyle'

export default class Modal extends Component {
	componentDidMount() {
		window.addEventListener('keydown', this.onKeyDown);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.onKeyDown);
	}

	onKeyDown = event => {
		if (event.code === 'Escape') {
			this.props.onCloseModal();
		}
	};

	onOverlayClick = event => {
		if (event.currentTarget === event.target) {
			this.props.onCloseModal();
		}
	};
	render() {
		return (
			<ModalOverlay onClick={this.onOverlayClick}>
				<Modalwindow>
					<img src={this.props.largeImageURL} alt="" />
				</Modalwindow>
			</ModalOverlay>
		)
	}
}
