import React, { useState, useEffect } from 'react';
import Todos from '../components/Todo/Todos';
import HeaderCategory from '../components/Layout/HeaderCategory';

const Dashboard = () => {
    const [todos, setTodos] = useState([]);
    const [blur, setBlur] = useState(false);
    const [activeTab, setActiveTab] = useState('all'); // Initialize active tab state
    const [nightMode, setNightMode] = useState(false); // State variable for night mode

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        localStorage.setItem('tab', tab); // Store tab in localStorage
    };

    const handleBlur = (blur) => {
        setBlur(blur);
    };

    useEffect(() => {
        async function fetchData() {
            // Fetch todos from localStorage if available
            const storedTodos = localStorage.getItem('todos');
            if (storedTodos) {
                setTodos(JSON.parse(storedTodos));
            } else {
                try {
                    const response = await fetch('https://dummyjson.com/todos');
                    if (!response.ok) {
                        throw new Error('Failed to fetch todos');
                    }
                    const data = await response.json();
                    const fetchedTodos = data.todos || [];
                    setTodos(fetchedTodos);
                    // Store todos in localStorage
                    localStorage.setItem('todos', JSON.stringify(fetchedTodos));
                } catch (error) {
                    console.error('Error fetching todos:', error);
                }
            }
        }
        fetchData();
    }, []);


    const markComplete = (id) => {
        const updatedTodos = todos?.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        // Update todos state
        setTodos(updatedTodos);
        // Update localStorage
        localStorage.setItem('todos', JSON.stringify(updatedTodos));

        // update in server
        fetch(`https://dummyjson.com/todos/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                completed: !todos.find(todo => todo.id === id).completed
            })
        })
            .then(res => res.json())
            .then(updatedTodo => {
                const updatedTodos = todos?.map(todo => {
                    if (todo.id === id) {
                        return { ...todo, completed: updatedTodo.completed };
                    }
                    return todo;
                })
                // Update todos state
                setTodos(updatedTodos);
                // Update localStorage
                localStorage.setItem('todos', JSON.stringify(updatedTodos));
            }
            )
    };

    const delTodo = (id) => {
        fetch('https://dummyjson.com/todos/1', {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                const updatedTodos = todos.filter(todo => todo.id !== id);
                // delete item
                setTodos(updatedTodos);
                // delete item in localStorage
                localStorage.setItem('todos', JSON.stringify(updatedTodos));
            }
            );

    };

    const addTodo = (title) => {
        const newTodo = {
            id: todos.length + 1,
            todo: title,
            completed: false
        };
        const updatedTodos = [...todos, newTodo];
        // Update todos state
        setTodos(updatedTodos);
        // Update localStorage
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };
    const handleModeSwitch = () => {
        // Add logic here to change background color of body
        document.body.classList.toggle('night-mode'); // Add or remove 'night-mode' class from body
        setNightMode(!nightMode); // Toggle night mode
    };

    return (
        <div className={`container ${blur ? 'blur' : ''}`} >
            <React.Fragment>
                <HeaderCategory
                    todos={todos}
                    addTodo={addTodo}
                    handleTabClick={handleTabClick}
                    activeTab={activeTab}
                    handleBlur={handleBlur}
                    nightMode={nightMode}
                    handleModeSwitch={handleModeSwitch}
                />
                {/* <AddTodo addTodo={addTodo} /> */}
                {todos ? <Todos todos={todos} activeTab={activeTab} markComplete={markComplete} delTodo={delTodo} />
                    : <div>Loading</div>
                }
            </React.Fragment>
        </div>
    );
};

export default Dashboard;
