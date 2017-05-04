import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputIsActive: false,
		}
	}

	toggleInputIsActive = () => {
		let auxActive = this.state.inputIsActive;
		this.setState({
			inputIsActive: !auxActive,
		});
	}

	render() {
		// Classes to add to the <input /> element
		let searchInputClasses = ["searchInput"];

		// Update the class array if the state is visible
		if (this.state.inputIsActive) {
			searchInputClasses.push("active");
		}

		return (
			<div className="header">
				<div className="fa fa-bars fa-lg fa-fw"></div>

				<span className="title">{this.props.title}</span>

				<input type="text"
					className={searchInputClasses.join(' ')}
					placeholder="Search..." />

				<div onClick={this.toggleInputIsActive} className="fa fa-search searchIcon fa-lg fa-fw"></div>
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
