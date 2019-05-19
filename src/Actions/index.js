export const lightenColor = (store, color) => {
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
export const darkenColor = (store, color) => {
	setTimeout(
		function(color) {
			const change = document.getElementById(color);
			change.style.backgroundColor = color;
		},
		100,
		color
	);
};
