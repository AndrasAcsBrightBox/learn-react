import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Todo from "./Todo";
import "./App.css";
import Header from "./components/layout/header";
import AddTodo from "./components/addTodo";
import About from "./pages/About";

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
    todos: [
      new Todo(0, "Take out the trash", true),
      new Todo(1, "Dinner with wife"),
      new Todo(2, "Meeting with boss.")
    ]
  };

  /*
    Element is a plain object describing what I want to show in therms of DOM.
    Once an element is created it is never mutated. Creatign elements is cheap.
  */
  sampleElement = React.createElement(
    "div",
    { id: "login-btn" },
    "Sample Element"
  );

  // One way data flow.
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delete = id => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id != id;
      })
    });
  };

  addTodo = title => {
    if (!title) return;
    let newId =
      this.state.todos.length > 0
        ? this.state.todos[this.state.todos.length - 1].id + 1
        : 0;

    this.setState({
      todos: [...this.state.todos, new Todo(newId, title)]
    });
  };

  // render() is a life cycle method. This returns a JSX (JavaScript XML).
  // JSX is providing syntax sugar for the React.createElement() function (HTML like templating)
  // Include JS into JSX with curly braces {} --> `{this.state.todos}`
  // HTML class in JSX --> `className`
  render() {
    return (
      <Router>
        <div className="App">
          {/* {this.sampleElement} */}
          <Header />
          <Route
            exact
            path="/"
            render={props =>
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delete={this.delete}
                />
              </React.Fragment>}
          />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
