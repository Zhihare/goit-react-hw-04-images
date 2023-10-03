import { ColorRing } from 'react-loader-spinner'

import React from 'react'

export const Loader = () => {
	return (
		<div style={{
			display: 'table',
			margin: '0 auto',
		}}>
			<ColorRing
				visible={true}
				height="100"
				width="100"
				ariaLabel="blocks-loading"
				wrapperStyle={{}}
				wrapperClass="blocks-wrapper"
				colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
			>
			</ColorRing>
		</div>
	)
}
