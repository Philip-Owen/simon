import React from 'react';
import useGlobalHook from 'use-global-hook';

import * as actions from '../Actions';

const initialState = {
	pattern: [],
	counter: 0,
	userCounter: 0,
	gameStarted: false,
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
