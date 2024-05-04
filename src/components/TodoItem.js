import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, markComplete, delTodo }) => {
    const getStyle = () => {
        return {
            width: '400px',
            padding: '20px',
            borderBottom: '1px #ccc dotted',
            borderRadius: '10px',
            marginTop: '20px',
            minHeight: '10vh',
            height: 'fit-content'
        };
    };

    const btnStyle = () => {
        return {
            background: 'red',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '50px',
            float: 'right',
            outline: 'none',
        }
    };
    const headerStyle = () => {
        return {
            display: 'flex',
            justifyContent: 'space-between'
        }
    }
    const statusStyle = () => {
        return {
            background: todo.completed === true ? '#EDF9F5' : '#eeedf6',
            padding: '1px 10px',
            color: todo.completed === true ? '#369F7C' : '#CC7630',
            borderRadius: '5px'
        }
    }

    return (
        <div style={getStyle()} className='todo-item-comp'>
            <div className='header-item' style={headerStyle()}>
                <div className='status' style={statusStyle()}>
                    {todo.completed ? 'completed' : 'in progress'}
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="12" cy="5" r="1"></circle>
                        <circle cx="12" cy="19" r="1"></circle></svg>
                </div>
            </div>
            <div
                style={{
                    textDecoration: todo.completed === true ? 'red dotted line-through' : 'none',
                }}>
                <p style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <div style={{
                        display:'flex',
                        justifyContent:'space-between'
                    }}>
                        <input
                            style={{
                                alignSelf: 'start',
                                marginTop: '5px',
                                marginRight: '4px'
                            }}
                            type='checkbox'
                            onChange={() => markComplete(todo.id)}
                            checked={todo.completed}
                        />{' '}
                        <span style={{
                            maxWidth: '20vw',
                        }}
                        >{todo.todo}</span>
                    </div>
                    <div>
                      
                    <button onClick={() => delTodo(todo.id)} style={btnStyle()}>
                        x
                    </button>
                    </div>
                </p>

            </div>
        </div>
    );
};

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
};


export default TodoItem;
