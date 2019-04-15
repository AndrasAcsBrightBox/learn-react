import React, { Component } from 'react';
import Todos from './components/Todos';
import Todo from './Todo';
import './App.css';

// Other type of acceptable extending wuld be:
// `class App extends React.Component`
class App extends Component {
  state = {
    todos : [
      new Todo(0, 'Take out the trash'),
      new Todo(1, 'Dinner with wife'),
      new Todo(2, 'Meeting with boss.')
    ] 
  };

  // render() is a life cycle method. This returns a JSX.
  // Include JS into JSX with curly braces {} --> `{this.state.todos}`
  // HTML class --> `className`
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
