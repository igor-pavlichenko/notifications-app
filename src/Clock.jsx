import React, { Component } from 'react';
import './Clock.css';

class Clock extends Component {

	constructor(props) {
		super(props);
		this.state = this.getTime();
	}

	getTime = () => {
		const currentTime = new Date();
		let hours = currentTime.getHours(),
			minutes = currentTime.getMinutes(),
			seconds = currentTime.getSeconds();
			//ampm = hours >= 12 ? 'pm' : 'am'; // damn muricans
		return {
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		}
	}

	setUpdateInterval = () => {
		// clear if it's still running
		this.interval = setInterval(this.updateClock, 1000);
	}

	updateClock = () => {
		this.setState(this.getTime);
	}

	componentDidMount() {
		this.setUpdateInterval();
	}


	render() {
		// es6 destructuring.. same as hours = this.state.hours, etc
		const { hours, minutes, seconds } = this.state;

		return (
			<div className="clock">
				{
					hours
				}:{
					minutes > 9 ? minutes : `0${minutes}`
				}:{
					seconds > 9 ? seconds : `0${seconds}`
				}
			</div>
		)
	}
}

export default Clock;
