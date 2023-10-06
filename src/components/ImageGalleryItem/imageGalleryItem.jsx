
import React from 'react'
import { ImageGalleryItemImg, ImageGalleryItemLi } from './imageGalleryItemStyle'

export function ImageGalleryItem({ onOpenModal, largeImageURL, id, webformatURL }) {



	return (
		<ImageGalleryItemLi onClick={() => onOpenModal(largeImageURL)} key={id}>
			<ImageGalleryItemImg src={webformatURL} alt="" />
		</ImageGalleryItemLi>
	);
};

