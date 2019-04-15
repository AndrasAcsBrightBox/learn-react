import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

// Other type of acceptable extending wuld be:
// `class App extends React.Component`
class App extends Component {
  state = {
    todos : [
      {
        id : 0,
        title : 'Take out the trash',
        completed: false
      },
      {
        id : 1,
        title : 'Dinner with wife',
        completed: false
      },
      {
        id : 2,
        title : 'Meeting with boss.',
        completed: false
      }
    ] 
  };

  // render() is a life cycle method. This returns a JSX.
  // Include JS into JSX with curly braces {}
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
