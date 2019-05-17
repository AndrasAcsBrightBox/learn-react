import React from 'react';
import TodoItem from './TodoItem';
import Todo from '../Todo';
import PropTypes from 'prop-types';


class Todos extends React.Component {
    render() {
        // Higher order function --> Array.prototype.map(fn)

        // A function is considered as a higher order function, if it accepts a function as an argument
        // or retruns with a function.
        return this.props.todos.map(
            (todo) => (
                <TodoItem 
                    key={todo.id}
                    todo={todo}
                    markComplete={this.props.markComplete}
                    delete={this.props.delete} />
            ));
    }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html
// property validation, without using any Flow or TypeScript!
Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.instanceOf(Todo)).isRequired
}

export default Todos;