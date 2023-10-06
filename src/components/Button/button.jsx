import React from 'react'
import { ButtonLoadMore } from './button.style'

export function Button({ onloadMore }) {
	const loadMoreSubmit = () => {
		onloadMore();
	}


	return (
		<ButtonLoadMore onClick={loadMoreSubmit}
		>Load more</ButtonLoadMore>
	)
}

