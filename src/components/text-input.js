import React from 'react';
import ReadAndWrite from '../system/components/read-and-write-state';

const TextInput = (state) => {
	return <input type='text' onChange={state.handleEvent} value={state.value || ""} />
}

export default ReadAndWrite(TextInput)
