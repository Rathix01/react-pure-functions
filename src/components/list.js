import React from 'react';
import R from 'ramda';
import StateProvider from './state-provider';
import ListItem from './list-item';

const toListItem = R.curry(( parentState, state, index ) => <ListItem id={ parentState.id + index } 
																	  rootId={ parentState.id } 
																	  key={ parentState.id + index }
																	  text={ state.value } /> );

const List = (state) => (<div> { state.items !== undefined ? state.items.map(toListItem( state )) : "" } </div>);

export default StateProvider(List);
