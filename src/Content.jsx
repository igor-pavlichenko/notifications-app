import React, { Component } from 'react';
import './Content.css';

import ActivityItem from './ActivityItem.jsx';

class Content extends Component {
	render() {

		const { activities } = this.props; // ES6 destructuring
		// const activities = this.props.activities;

		return (
			<div className="content">
				<div className="line"></div>

				{/* Timeline item */}
				{activities.map((activity) => {
					return (
						<ActivityItem activity={activity} />
					);
				})}

				{/* ... */}

			</div>
		);
	}
}

export default Content;
