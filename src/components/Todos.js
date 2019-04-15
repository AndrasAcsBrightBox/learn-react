import React from 'react';
import TodoItem from './TodoItem';
import Todo from '../Todo';
import PropTypes from 'prop-types';


class Todos extends React.Component {
    render() {
        console.log(this.props.todos);

        // Higher ourder function --> Array.prototype.map(fn)
        return this.props.todos.map(
            (todo) => (
                <TodoItem 
                    key={todo.id}
                    todo={todo} />
            ));
    }
}

// https://reactjs.org/docs/typechecking-with-proptypes.html
// property validation, without using any Flow or TypeScript!
Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.instanceOf(Todo)).isRequired
}

export default Todos;