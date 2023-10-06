import React, { useState } from 'react'
import { TfiSearch } from 'react-icons/tfi';
import { SearchBarForm, SearchBarHeader, SearchBarButton, SerchBarInput } from './searchBarStyle'


export function SearchBar({ handleFormSubmit }) {
	const [search, setSearch] = useState(null);
	// state = {
	// 	search: null,
	// };

	const handleSearchChange = event => {
		setSearch(event.currentTarget.value.toLowerCase());
		// this.setState({
		// 	search: event.currentTarget.value.toLowerCase()
		// });
	}


	const handleSubmit = event => {
		event.preventDefault();

		if (search === null) {
			alert('Заповніть поле пошуку!');
			return;
		}
		handleFormSubmit(search);
		setSearch(null);
		// this.setState({ search: null });
	}


	return (
		<SearchBarHeader onSubmit={handleSubmit}>
			<SearchBarForm>
				<SearchBarButton type="submit">
					<TfiSearch style={{
						height: '35px',
						width: '30px',
					}} />
				</SearchBarButton>

				<SerchBarInput
					type="text"
					placeholder="Search images and photos"
					onChange={handleSearchChange}
				/>
			</SearchBarForm>
		</SearchBarHeader>
	);
}

