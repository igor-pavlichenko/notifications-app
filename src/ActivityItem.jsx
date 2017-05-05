import React, { Component } from 'react';
import './ActivityItem.css';

class ActivityItem extends Component {

	render() {
		const activity = this.props.activity;

		return (
			<div className="item">
				<div className="avatar">
					<img
						alt={activity.type}
						src={activity.actor.avatar_url} />
					{activity.actor.display_login}
				</div>

				<span className="time">
					{activity.created_at}
				</span>
				<p>[{activity.actor.display_login}] {activity.payload.action} - {activity.type}</p>
				<div className="right">
					{activity.repo.name}
				</div>
			</div>
		);
	}
}

export default ActivityItem;
