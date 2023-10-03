
import React, { Component } from 'react'
import { ImageGalleryItemImg, ImageGalleryItemLi } from './imageGalleryItemStyle'

export default class ImageGalleryItem extends Component {


	render() {
		return (
			<ImageGalleryItemLi onClick={() => this.props.onOpenModal(this.props.largeImageURL)} key={this.props.id}>
				<ImageGalleryItemImg src={this.props.webformatURL} alt="" />
			</ImageGalleryItemLi>
		);
	};
}
