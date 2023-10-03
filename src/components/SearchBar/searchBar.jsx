import React, { Component } from 'react'
import { TfiSearch } from 'react-icons/tfi';
import { SearchBarForm, SearchBarHeader, SearchBarButton, SerchBarInput } from './searchBarStyle'


export default class SearchBar extends Component {
	state = {
		search: null,
	};

	handleSearchChange = event => {
		this.setState({
			search: event.currentTarget.value.toLowerCase()
		});
	}


	handleSubmit = event => {
		event.preventDefault();

		if (this.state.search === null) {
			alert('Заповніть поле пошуку!');
			return;
		}
		this.props.handleFormSubmit(this.state.search);
		this.setState({ search: null });
	}


	render() {
		return (
			<SearchBarHeader onSubmit={this.handleSubmit}>
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
						onChange={this.handleSearchChange}
					/>
				</SearchBarForm>
			</SearchBarHeader>
		);
	}
}
