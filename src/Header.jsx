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


	render() {

		return (
			<div className="header">
				<div className="fa fa-bars fa-lg fa-fw"></div>

				<span className="title">{this.props.title}</span>

				<SearchForm onSubmit={this.props.onSubmit} />
			</div>
		);
	}
}

Header.propTypes = {
	title: PropTypes.string,
}

Header.defaultProps = {
	title: 'Github activity',
}

export default Header;
