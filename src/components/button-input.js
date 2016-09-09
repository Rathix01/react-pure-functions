import React from 'react';
import ReadAndWrite from '../system/components/read-and-write-state';

const Button = (state) => {
	return <button onClick={state.handleEvent}> {state.text} </button>
}

export default ReadAndWrite(Button)
