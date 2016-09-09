import React from 'react';
import Checkbox from './checkbox-input';
import ReadAndWrite from '../system/components/read-and-write-state';

const ListItem = (state) => {
	return (<div> 
		<Checkbox id={ state.id + "Checkbox" } rootId={ state.rootId } />
		<span>{ state.value }</span>
		<button onClick={state.handleEvent}>X</button>
	</div>);
}

export default ReadAndWrite(ListItem)