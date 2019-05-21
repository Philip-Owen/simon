import React from 'react';

import useGlobal from '../Store';

const Block = props => {
	const [, globalActions] = useGlobal();
	const { lightenColor, darkenColor, getUserPattern } = globalActions;
	const { color } = props;
	const handleMouseDown = () => lightenColor(color);
	const handleMouseUp = () => darkenColor(color, 100);
	const handleClick = () => getUserPattern(color);
	return (
		<div className="block" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onClick={handleClick}>
			<div id={color} />
		</div>
	);
};

export default Block;
