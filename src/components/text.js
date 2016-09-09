import React from 'react';
import Read from '../system/components/read-state';

const Text = (state) => {
	return <div className='text'> {state.value} </div>
}

export default Read(Text)