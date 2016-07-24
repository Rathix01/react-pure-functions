import React from 'react';
import StateProvider from './state-provider';

const TextInput = (state) => {
	return <input type='text' onChange={state.publish} value={state.value || ""} />
}

export default StateProvider(TextInput)
