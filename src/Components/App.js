import React from 'react';
import Block from './Block';
import '../App.css';

import useGlobal from '../Store';

const App = () => {
	const [, globalActions] = useGlobal();
	const { startGame } = globalActions;
	return (
		<div className="app">
			<button onClick={startGame}>Start Game</button>
			<div className="simon">
				<div className="row">
					<Block color="red" />
					<Block color="blue" />
				</div>
				<div className="row">
					<Block color="green" />
					<Block color="yellow" />
				</div>
			</div>
		</div>
	);
};

export default App;
