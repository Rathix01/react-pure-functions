import React from 'react';
import R from 'ramda';
import actions from '../../actions/actions';
import ReadState from './read-state';

const EventHandlerComponent = ( InnerComponent ) => class extends React.Component {
	constructor() {
		super()
		this.handleEvent = this.handleEvent.bind(this);
	}
	publishState(state) {
		actions.push({ component: InnerComponent.name, ...this.props, ...this.state, ...state });
	}
	handleEvent(event) {
		this.publishState({ event: { target: event.target }}) //TODO - supply more sensible list of event props.
	}
	render(){
		return <InnerComponent
			handleEvent={this.handleEvent}
			{...this.state}
			{...this.props} />
	}
}

export default R.compose( ReadState, EventHandlerComponent );
