import Bacon from 'baconjs';
import R from 'ramda';
import Publish from '../system/stores/state-store';
import Actions from '../actions/actions';

const mapIndexed = R.addIndex(R.map);
const isSubmitAction = (state) => state.id === "Submit";
const isToDoTextAction = (state) => state.id === "Todo";

const toItem = (state) => R.merge( state, { value: state.event.target.value, id: state.id + "List" });
const toEmptyText = () => ({ value: "" });

const submit = Actions.filter(isSubmitAction);
const toDoItem = Actions.filter(isToDoTextAction).map(toItem).toProperty();

const submitItem = Bacon.when([ toDoItem, submit ], (item) => item );
const emptyText = submit.map(toEmptyText);

const ToDoInputValue = toDoItem.toEventStream().merge(emptyText.toEventStream())

ToDoInputValue.onValue(Publish("Todo"));

export { submitItem as ToDoSubmit }
export default ToDoInputValue;