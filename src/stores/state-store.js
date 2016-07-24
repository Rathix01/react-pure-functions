import Bacon from 'baconjs';
import R from 'ramda';

const publish = R.curry( ( key, state ) => incomingState.push( { [ key ]: state }) );
const setState = ( existing, newState ) => R.merge( existing, newState );

const incomingState = new Bacon.Bus();
const currentState = incomingState.scan( {}, setState );
currentState.onValue( (state) => window.currentState = state );

export { currentState };
export default publish;
