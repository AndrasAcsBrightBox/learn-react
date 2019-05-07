import React, { Component } from 'react';
import Todos from './components/Todos';
import Todo from './Todo';
import './App.css';

/*
  React:
    x open-source frontent JS library
    x used for building UI for SPAs
    x used for handling the view layer for web and mobile apps
    x __Major Features:__
      o VirtualDOM insted of RealDOM, as manipulating it is faster
      o supports server-side rendering
      o unidirectional data flow
      o composable (reusable) UI components to develop the view. 
    
*/

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

  /*
    Element is a plain object describing what I want to show in therms of DOM.
    Once an element is created it is never mutated. Creatign elements is cheap.
  */
  sampleElement = React.createElement(
    'div', 
    { id : 'login-btn'},
    'Sample Element'
  )

  // render() is a life cycle method. This returns a JSX (JavaScript XML).
  // JSX is providing syntax sugar for the React.createElement() function (HTML like templating)
  // Include JS into JSX with curly braces {} --> `{this.state.todos}`
  // HTML class in JSX --> `className`
  render() {
    return (
      <div className="App">
        {this.sampleElement}
        <h1>{'Welcome to the React world!'}</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
