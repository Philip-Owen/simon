export const lightenColor = (store, color) => {
	const change = document.getElementById(color);
	switch (color) {
		case 'red':
      change.style.backgroundColor = `#ef6262`;
      change.style.borderRight = 'black 8px solid';
      change.style.borderBottom = 'black 8px solid';
			break;
		case 'blue':
      change.style.backgroundColor = `#6a6aff`;
      change.style.borderLeft = 'black 8px solid';
      change.style.borderBottom = 'black 8px solid';
			break;
		case 'green':
      change.style.backgroundColor = `#57b357`;
      change.style.borderRight = 'black 8px solid';
      change.style.borderTop = 'black 8px solid';
			break;
		case 'yellow':
      change.style.backgroundColor = '#FFFFBB';
      change.style.borderLeft = 'black 8px solid';
      change.style.borderTop = 'black 8px solid';
			break;
		default:
			break;
	}
};

export const darkenColor = (store, color, timer) => {
	setTimeout(
		function(color) {
			const change = document.getElementById(color);
      change.style.backgroundColor = color;
      change.style.border = 'black 10px solid';
		},
		timer,
		color
	);
};

export const startGame = store => {
	if (store.state.gameStarted) {
		return;
	}
	store.setState({ gameStarted: true });
	createPattern(store);
};

const createPattern = store => {
	const newPattern = [...store.state.pattern, randomColor()];
	const newCounter = ++store.state.counter;
	store.setState({ pattern: newPattern, counter: newCounter });
	displayPattern(store);
};

export const getUserPattern = (store, color) => {
	const { gameStarted, pattern, userCounter, counter } = store.state;
	if (!gameStarted) {
		console.log('game not started');
		return;
	}
	if (color === pattern[userCounter]) {
		console.log('Correct');
		const newUserCounter = userCounter + 1;
		if (newUserCounter === counter) {
			store.setState({ userCounter: 0 });
			continueGame(store);
		} else {
			store.setState({ userCounter: newUserCounter });
		}
	} else {
		console.log('Wrong!');
		endGame(store);
	}
};

const displayPattern = store => {
	colorTimer(store);
};

const colorTimer = store => {
	const { pattern } = store.state;
	let i = 0;
	let len = pattern.length;
	console.log(i, len, pattern);
	setInterval(function() {
		if (i === len) {
			clearInterval(this);
		} else {
			console.log(pattern[i]);
			lightenColor(store, pattern[i]);
			darkenColor(store, pattern[i], 300);
			i++;
		}
	}, 1000);
};

const continueGame = store => {
	const { gameStarted } = store.state;
	if (gameStarted) {
		createPattern(store);
	}
};

const endGame = store => {
	console.log('Game Over!');
	const pattern = [];
	const counter = 0;
	const userCounter = 0;
	const gameStarted = false;
	store.setState({ pattern, counter, userCounter, gameStarted });
	return;
};

const randomColor = () => {
	const colors = ['red', 'blue', 'green', 'yellow'];
	const number = Math.floor(Math.random() * 4);
	return colors[number];
};
