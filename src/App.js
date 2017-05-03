import React, { Component } from 'react';
import './App.css';

import Header from './Header.jsx';
import Content from './Content.jsx';

class App extends Component {
	render() {
		const activities = [
			{
				timestamp: Date.now(),
				text: "Ate lunch",
				user: {
					id: 1, name: 'Nate',
					avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
				},
				comments: [{ from: 'Ari', text: 'Me too!' }]
			},
			{
				timestamp: Date.now(),
				text: "Woke up early for a beautiful run",
				user: {
					id: 2, name: 'Ari',
					avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
				},
				comments: [{ from: 'Nate', text: 'I am so jealous' }]
			},
		]
		return (
			<div className="notificationsFrame">
				<div className="panel">
					<Header title="Timeline" />
					<Content activities={activities} />
				</div>
			</div>
		);
	}
}

export default App;
