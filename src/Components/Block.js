import React from 'react';

import useGlobal from '../Store';

const Block = props => {
	const [globalState, globalActions] = useGlobal();
	const { lightenColor, darkenColor } = globalActions;
	const { color } = props;
	const handleMouseDown = () => lightenColor(color);
	const handleMouseUp = () => darkenColor(color);
	return <div id={color} className="block" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />;
};

export default Block;
