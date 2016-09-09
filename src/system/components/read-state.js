import React from 'react';
import R from 'ramda';
import { currentState } from '../stores/state-store';
import actions from '../../actions/actions';

const StateProvider = ( InnerComponent ) => class extends React.Component {
	constructor() {
		super();
		this.update = this.update.bind(this);
		this.state = { version: 0 }
	}
	update(state) {
		if( state[this.props.id] && state[this.props.id].version !== this.state.version ) {
			this.setState(state[this.props.id] || {});
		}
	}
	componentWillMount(){
		this.unsubscribe = currentState.onValue( this.update )
	}
	componentWillUnmount() {
		this.unsubscribe();
	}
	render(){
		return <InnerComponent
			{...this.state}
			{...this.props} />
	}
}

export default StateProvider;