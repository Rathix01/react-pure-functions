import React from 'react';
import R from 'ramda';
import actions from '../../actions/actions';
import ReadState from './read-state';

const ModuleStatePublisherComponent = ( InnerComponent ) => class extends React.Component {
	publishState(state) {
		actions.push({ component: InnerComponent.name, ...this.props, ...this.state, ...state });
	}
	componentDidUpdate() {
		this.publishState({})
	}
	componentDidMount() {
		this.publishState({})
	}
	render(){
		return <InnerComponent
			{...this.state}
			{...this.props} />
	}
}

export default R.compose(ReadState, ModuleStatePublisherComponent);