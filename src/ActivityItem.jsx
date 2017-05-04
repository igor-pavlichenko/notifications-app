import React, { Component } from 'react';
import './ActivityItem.css';

class ActivityItem extends Component {

	render() {
		return (
			<div className="item">
				<div className="avatar">
					<img
						alt={this.props.activity.type}
						src={this.props.activity.actor.avatar_url} />
					{this.props.activity.actor.display_login}
				</div>

				<span className="time">
					{this.props.activity.created_at}
				</span>
				<p>{this.props.activity.payload.action} - {this.props.activity.type}</p>
				<div className="right">
					{this.props.activity.repo.name}
				</div>
			</div>
		);
	}
}

export default ActivityItem;
