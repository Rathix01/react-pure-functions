import React from 'react';
import R from 'ramda';

const renderChild = (state) => {
    return React.cloneElement(R.head(React.Children.toArray(state.children)), { id: `${state.rootId}Item${state.index}`, key: state.index, rootId: state.rootId });
}

const ListItem = (state) => {
     return( <div id={ state.rootId + "Animation" + state.index} className={` ${state.className}`}>
        <div id={state.rootId + "Visibility" + state.index} key={state.rootId + state.index}>
          {renderChild(state)}
        </div>
      </div>);
};

export default ListItem;
