import React, { Component } from "react";
import PropTypes from "prop-types";
import Todo from "../Todo";

export class TodoItem extends Component {
  render() {
    // deconstructing the this.props.todo, so we do not have to reference it
    // directly each time we need something from it.
    const { id, title, completed } = this.props.todo;

    // css properties should be in camelCase instead of kebab-cased
    return (
      <div
        style={{
          backgroundColor: "#f4f4f4",
          width: "300px",
          marginLeft: "30px",
        }}
      >
        <div style={this.getStyle()}>
          {/* If we are not using an an arrow function in the event handler,
          then we need to manually bind `this` --> this.markComplete.bind(this); */}
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
            checked={completed ? 'checked' : ''}
            style = {{
              padding: '5px'
            }}
          />
          {title}
          <input
            type="button"
            onClick={this.props.delete.bind(this, id)}
            value="X"
            style={btnStyle}
          />
        </div>
      </div>
    );
  }

  // We need to climb the ladder, as we have the state in the App.js
  // markComplete = (eventArgs) => {
  //   console.log(this.props);
  // }

  // Ofc - we could use a ternary operator here for the syleing as well.
  getStyle = () => {
    if (this.props.todo.completed) {
      return {
        background: "#a1a1a1",
        textDecoration: "line-through",
        height: '50px',
        padding: '10px'
      };
    } else {
      return {
        textDecoration: "none",
        height: '50px',
        padding: '10px'
      };
    }
  };
}

const btnStyle = {
  backgroundColor: "#ff0000",
  color: "white",
  border: "none",
  padding: "5px 8px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

TodoItem.propTypes = {
  todo: PropTypes.instanceOf(Todo).isRequired
};

export default TodoItem;
