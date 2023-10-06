import React, { useEffect } from 'react'
import { ModalOverlay, Modalwindow } from './modalStyle'

export function Modal({ onCloseModal, largeImageURL }) {
	// componentDidMount() {
	// 	window.addEventListener('keydown', this.onKeyDown);
	// }

	// componentWillUnmount() {
	// 	window.removeEventListener('keydown', this.onKeyDown);
	// }
	useEffect(() => {
		window.addEventListener('keydown', onKeyDown);
		return () => {
			window.removeEventListener('keydown', onKeyDown);
		}
	});


	const onKeyDown = event => {
		if (event.code === 'Escape') {
			onCloseModal();
		}
	};

	const onOverlayClick = event => {
		if (event.currentTarget === event.target) {
			onCloseModal();
		}
	};

	return (
		<ModalOverlay onClick={onOverlayClick}>
			<Modalwindow>
				<img src={largeImageURL} alt="" />
			</Modalwindow>
		</ModalOverlay>
	)
}

