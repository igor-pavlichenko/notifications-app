import React, { Component } from 'react';
import './App.css';

import Header from './Header.jsx';
import Content from './Content.jsx';

class App extends Component {
	render() {
		return (
			<div className="notificationsFrame">
				<div className="panel">
					<Header></Header>
					<Content></Content>
				</div>
			</div>
		);
	}
}

export default App;
