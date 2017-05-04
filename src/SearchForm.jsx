import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchForm.css';

class SearchForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchText: '',
			inputIsActive: false,
		}
	}

	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
		searchVisible: PropTypes.bool
	}

	static defaultProps = {
		onSubmit: () => { console.info('default submit'); },
		searchVisible: false
	}

	updateSearchInput = (e) => {
		const val = e.target.value;
		this.setState({
			searchText: val,
		});
	}

	toggleInputIsActive = () => {
		let auxActive = this.state.inputIsActive;
		this.setState({
			inputIsActive: !auxActive,
		});
	}

	submitForm = (e) => {
		e.preventDefault();

		const { searchText } = this.state;
		this.props.onSubmit(searchText);
	}


	render() {
		// Classes to add to the <input /> element
		let searchInputClasses = ["searchInput"];

		// Update the class array if the state is visible
		if (this.state.inputIsActive) {
			searchInputClasses.push("active");
		}

		return (
			<form
				className="searchForm"
				onSubmit={this.submitForm}>

				<input
					type="search"
					className={searchInputClasses.join(' ')}
					onChange={this.updateSearchInput}
					placeholder="Search..." />

				<div onClick={this.toggleInputIsActive} className="fa fa-search searchIcon fa-lg fa-fw"></div>
			</form>
		);
	}
}

export default SearchForm;
