import Bacon from 'baconjs';
import R from 'ramda';
import Publish from '../../../stores/state-store';
import ListItemStore from './list-item-store';

const publishToListComponent = (state) => Publish(state.id + "List", R.omit("version", state));
const publishToItem = (state) => Publish((state.key + 'ListItem' + state.index), state);
const publishToVisible = (state) => Publish((state.key + 'ListAnimation' + state.index), { opacity: 1 });

ListItemStore.items.onValue(publishToListComponent);

const item = ListItemStore.individualItems;
item.onValue(publishToItem);
item.onValue(publishToVisible);

module.exports = {
  item
};
