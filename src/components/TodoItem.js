import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo';

export class TodoItem extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#f4f4f4"}}>
          <p>{this.props.todo.title}</p>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.instanceOf(Todo).isRequired
}

export default TodoItem
