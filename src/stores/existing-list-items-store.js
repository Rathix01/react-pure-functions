import Bacon from 'baconjs';
import Publish from '../system/stores/state-store';

const listItems1 = [
  { value: 'Phone Clients', checked: true },
  { value: 'Sandcastles...', checked: false },
  { value: 'Design Solar Powered Submarines', checked: false },
];

const toItemProp = (items) => ({ items });
const initListBus = new Bacon.Bus()
const initList = initListBus.map(toItemProp);

setTimeout(function() {
	initListBus.push(listItems1)
}, 200)

export default initList

