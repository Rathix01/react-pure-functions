import React, { Component } from 'react';
import Button from './button-input';
import TextInput from './text-input';
import List from './list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <List id='TodoList' />
        <TextInput id='Todo' />
        <Button id='Submit' text='Submit' />
      </div>
    );
  }
}

export default App;
