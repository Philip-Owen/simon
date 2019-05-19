import React from 'react';

const Block = props => {
	const { color } = props;
	const lightenColor = () => {
		const change = document.getElementById(color);
		switch (color) {
			case 'red':
				change.style.backgroundColor = `#ef6262`;
				break;
			case 'blue':
				change.style.backgroundColor = `#6a6aff`;
				break;
			case 'green':
				change.style.backgroundColor = `#57b357`;
				break;
			case 'yellow':
				change.style.backgroundColor = '#ffff95';
				break;
			default:
				break;
		}
	};
	const darkenColor = () => {
		setTimeout(
			function(color) {
				const change = document.getElementById(color);
				change.style.backgroundColor = color;
			},
			100,
			color
		);
	};
	return <div id={color} className="block" onMouseDown={lightenColor} onMouseUp={darkenColor} />;
};

export default Block;
