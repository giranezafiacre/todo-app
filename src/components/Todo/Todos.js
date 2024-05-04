import React from 'react';
import TodoItem from '../TodoItem';
import PropTypes from 'prop-types';
import './Todos.css'; // Import CSS file for styling

const Todos = ({ markComplete, delTodo, todos, activeTab }) => {
    // Filter todos based on the active tab
    let filteredTodos;
    switch (activeTab) {
        case 'all':
            filteredTodos = todos;
            break;
        case 'completed':
            filteredTodos = todos.filter(todo => todo.completed === true);
            break;
        case 'todo':
            filteredTodos = todos.filter(todo => todo.completed === false);
            break;
        default:
            filteredTodos = todos;
    }

    // Calculate number of todos in each column
    const todosPerColumn = Math.ceil(filteredTodos.length / 3);

    // Divide filtered todos into three columns
    const column1 = filteredTodos.slice(0, todosPerColumn);
    const column2 = filteredTodos.slice(todosPerColumn, todosPerColumn * 2);
    const column3 = filteredTodos.slice(todosPerColumn * 2);

    return (
        <div className="todos-container">
            <div className="column">
                {column1.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        markComplete={markComplete}
                        delTodo={delTodo}
                    />
                ))}
            </div>
            <div className="column">
                {column2.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        markComplete={markComplete}
                        delTodo={delTodo}
                    />
                ))}
            </div>
            <div className="column">
                {column3.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        markComplete={markComplete}
                        delTodo={delTodo}
                    />
                ))}
            </div>
        </div>
    );
};

Todos.propTypes = {
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired,
    activeTab: PropTypes.oneOf(['all', 'completed', 'todo']).isRequired, // Add prop type for activeTab
};

export default Todos;
