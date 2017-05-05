import React, { Component } from 'react';
import './Container.css';

import Header from './Header.jsx';
import Content from './Content.jsx';
import Clock from './Clock.jsx';
import Footer from './Footer.jsx';


// An async request
const data = require('./data.json');
const fetchEvents = () => Promise.resolve(data)
	.then(json => json.slice(0, 5));

class Container extends Component {

	constructor(props) {
		super(props);

		this.state = {
			refreshing: false,
			activities: data,
			filtered: data,
			searchFilter: '',
		}
	}

	// Bound to the refresh button
	refresh() {
		console.log('refresh');
		this.setState({ refreshing: true })
	}

	// Callback from the `Content` component
	onComponentRefresh = () => {
		this.setState({ refreshing: false });
	}

	handleSearch = (val) => {
		console.info('Container\'s handleSearch');
		this.setState({
			searchFilter: val,
			loading: true,
		});
	}

	updateData = () => {
		console.info('Container\'s updateData');
		this.setState({
			loading: false,
			activities: data
		}, this.props.onComponentRefresh);
	}


	render() {

		const { refreshing } = this.state;

		return (
			<div className="notificationsFrame">
				<div className="panel">
					<Header
						title="Github activity"
						onSearch={this.handleSearch} />
					{/* refreshing is the component's state */}
					<Content
						requestRefresh={refreshing}
						onComponentRefresh={this.onComponentRefresh}
						fetchData={this.updateData} />
					<Footer>
						{/* we pass the refresh function to the Footer's button but
							it's actually bound to this Container so it will execute here */}
						<button onClick={this.refresh.bind(this)}>
							<i className="fa fa-refresh" />
							Refresh
            			</button>
					</Footer>

					<Clock />

				</div>
			</div>
		);
	}
}

export default Container;
