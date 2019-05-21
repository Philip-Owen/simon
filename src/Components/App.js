import React from 'react';
import Block from './Block';
import '../App.css';

import useGlobal from '../Store';

const App = () => {
	const [globalStore, globalActions] = useGlobal();
	const { gameStarted, counter } = globalStore;
	const { startGame } = globalActions;
	return (
		<div className="app">
			<button onClick={startGame} className={gameStarted ? 'hidden' : ''}>
				Start Game
			</button>
			<p>Count: {counter > 0 ? counter - 1 : counter}</p>
			{ counter > 0  && !gameStarted ? <p>Game Over!!</p> : null } 
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
