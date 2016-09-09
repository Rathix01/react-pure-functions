import React, { Component } from 'react';
import Button from './button-input';
import TextInput from './text-input';
import Text from './text';
import List from '../system/modules/list'
import ToDoListItem from './to-do-list-item'
import ListDemo from '../system/modules/list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>To Do List</h2>
        <List id="ToDos" itemClass="list-item">
          <ToDoListItem />
        </List>
        <TextInput id='Todo' />
        <Button id='Submit' text='Submit' />
      </div>
    );
  }
}

export default App;
