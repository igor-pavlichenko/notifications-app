import React, { Component } from 'react';
import './ActivityItem.css';

class ActivityItem extends Component {

	render() {
		return (
			<div className="item">
				<div className="avatar">
					<img
						alt={this.props.activity.text}
						src={this.props.activity.user.avatar} />
					{this.props.activity.user.name}
				</div>

				<span className="time">
					{this.props.activity.timestamp}
				</span>
				<p>{this.props.activity.text}</p>
				<div className="commentCount">
					{this.props.activity.comments.length}
				</div>
			</div>
		);
	}
}

export default ActivityItem;
