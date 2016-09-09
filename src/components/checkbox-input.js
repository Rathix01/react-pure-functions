import React from 'react';
import ReadAndWrite from '../system/components/read-and-write-state';

const Checkbox = (state) => <input type='checkbox' onChange={state.handleEvent} checked={state.checked || false} />

export default ReadAndWrite(Checkbox)