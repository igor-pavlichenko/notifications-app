import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

	constructor() {
		super();
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
		return (
			<div className="header">
				<div className="fa fa-bars fa-lg fa-fw"></div>

				<span className="title">Timeline</span>

				<input type="text"
						className={(this.state.inputIsActive ? "active" : "") + " searchInput"}
						placeholder="Search..."/>

				<div onClick={this.toggleInputIsActive} className="fa fa-search searchIcon fa-lg fa-fw"></div>
			</div>
		);
	}
}

export default Header;
