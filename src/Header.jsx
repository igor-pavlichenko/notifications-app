import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

import SearchForm from './SearchForm.jsx';

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	submitForm = (val) => {
		console.info('Header\'s submit');
		this.props.onSearch(val);
	}


	render() {

		return (
			<div className="header">
				<div className="fa fa-bars fa-lg fa-fw"></div>

				<span className="title">{this.props.title}</span>

				<SearchForm onSubmit={this.submitForm} />
			</div>
		);
	}
}

Header.propTypes = {
	title: PropTypes.string,
	onSearch: PropTypes.func,
}

Header.defaultProps = {
	title: 'Github activity',
	onSearch: () => { console.info('header\'s onSearch') }
}

export default Header;
