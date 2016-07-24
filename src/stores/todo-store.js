import Bacon from 'baconjs';
import R from 'ramda';
import Publish from './state-store';
import Actions from '../actions/actions';

const isSubmitAction = ( state ) => state.id === "Submit";
const isToDoTextAction = ( state ) => state.id === "Todo";
const toText = ( state ) => ({ value: state.event.target.value });
const toItems = ( arr ) => ({ items: arr });

const submit = Actions.filter(isSubmitAction);
const toDoText = Actions.filter(isToDoTextAction).map(toText).toProperty();

const submitText = Bacon.when([ toDoText, submit ], ( text ) => text );
const listUpdate = Bacon.update([], submitText, R.concat);

toDoText.onValue(Publish("Todo"));
listUpdate.map( toItems ).onValue(Publish("TodoList"));

listUpdate.log('??')
