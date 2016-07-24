import React from 'react';
import StateProvider from './state-provider';

const ListItem = (state) => {
	return <div> { state.text } </div>
}

export default StateProvider(ListItem)