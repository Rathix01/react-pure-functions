import React from 'react';
import ModuleStatePublisher from '../../../components/module-state-publisher';
import List from './list';

const ListContainer = (state) => (
	<div className='list-container'>
		<List id={ state.id + 'List' } children={state.children} />
	</div>
);

export default ModuleStatePublisher(ListContainer);