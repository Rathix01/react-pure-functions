import Bacon from 'baconjs';
import R from 'ramda';
import Actions from '../actions/actions';
import initList from './existing-list-items-store';
import { Items as List } from '../system/modules/list';
import { ToDoSubmit } from './to-do-input-store';
import Publish from '../system/stores/state-store';

const toInitList = (existing, initList) => initList;
const addNewItemToList = (existing, list, toDo) => ({ items: R.concat(list.items, { value: toDo.value }) });

const toToDoDeleteEvents = (state) => state.component === "ListItem" && state.rootId === "ToDosList";
const removeItemFromList = (existing, list, toDo) => ({ items: R.filter(removeToDo(toDo), list.items) });
const removeToDo = R.curry((toDo, listItem) => toDo.index !== listItem.index);

const toToDoCheckEvents = (state) => state.component === "Checkbox" && state.rootId === "ToDosList";
const updateItemFromList = (existing, list, checkbox) => ({ items: R.map( updateToDo(checkbox), list.items ) });
const updateToDo = R.curry((checkbox, listItem) => {
	return getCheckboxKey(listItem) === checkbox.id
		? R.merge( listItem, { checked: checkbox.event.target.checked || false } )
		: listItem;
});

const toItems = (list) => list.items
const publishToCheckbox = (listItem) => Publish(getCheckboxKey(listItem), { checked: listItem.checked } )
const getCheckboxKey = (listItem) => listItem.key + "ListItem"  + listItem.index + "Checkbox";

const listItemDelete$ = Actions.filter( toToDoDeleteEvents );
const checkItemEvent$ = Actions.filter( toToDoCheckEvents );

const listItemUpdates$ = Bacon.update(
	{ items: [] },
	[ initList ], toInitList,
	[ List.toProperty(), ToDoSubmit.toEventStream() ], addNewItemToList,
	[ List.toProperty(), listItemDelete$.toEventStream() ], removeItemFromList,
	[ List.toProperty(), checkItemEvent$.toEventStream() ], updateItemFromList
);

listItemUpdates$.changes().onValue(Publish('ToDos'));
List.map(toItems).flatMap(Bacon.fromArray).onValue(publishToCheckbox)
