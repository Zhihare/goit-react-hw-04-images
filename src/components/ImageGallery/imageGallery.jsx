import { ImageGalleryUl } from './imageGalleryStyle'
import React from 'react'

export const ImageGallery = (props) => {
	return (
		<ImageGalleryUl>
			{props.children}
		</ImageGalleryUl>
	)
}

