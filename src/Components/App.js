import React, { Component } from 'react';
import Block from './Block';
import '../App.css';

class App extends Component {
	render() {
		return (
			<div>
				<div>
					<button>Start Game</button>
				</div>
				<div className="row">
					<Block color="red" />
					<Block color="blue" />
				</div>
				<div className="row">
					<Block color="green" />
					<Block color="yellow" />
				</div>
			</div>
		);
	}
}

export default App;
