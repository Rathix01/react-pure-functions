import React from 'react';
import StateProvider from './state-provider';

const Button = (state) => {
	return <button onClick={state.publish}> {state.text} </button>
}

export default StateProvider(Button)
