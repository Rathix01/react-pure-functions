import React from 'react';
import { currentState } from '../stores/state-store';
import actions from '../actions/actions';
import R from 'ramda';

let StateProvider = ( InnerComponent ) => class extends React.Component {
	constructor() {
		super();
		this.update = this.update.bind(this);
		this.publish = this.publish.bind(this);
	}
	publish( event ) {
		actions.push({ event: R.clone(event), id: this.props.id, rootId: this.props.rootId || "" });
	}
	update(state) {
		this.setState(state[this.props.id] || {});
	}
	componentWillMount(){
		this.unsubscribe = currentState.onValue( this.update )
	}
	componentWillUnmount() {
		this.unsubscribe();
	}
	render(){
		return <InnerComponent
			publish={this.publish}
			{...this.state}
			{...this.props} />
	}
}

export default StateProvider;