import React from 'react';
import Block from './Block';
import '../App.css';

import useGlobal from '../Store';

const App = () => {
	const [globalState, globalActions] = useGlobal();
	const { startGame } = globalActions;
	return (
		<div>
			<div>
				<button onClick={startGame}>Start Game</button>
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
};

export default App;
