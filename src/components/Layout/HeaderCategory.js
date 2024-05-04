import React, { useState } from 'react';
import './headercategory.css';
import { Modal, Button, Form } from "react-bootstrap"; // Import Form from react-bootstrap
import Success from "./Success";

const Close = () => {
    return (
        <div>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                    d="M1 1L11 11M1 11L11 1"
                    stroke="#363432"
                    strokeLinecap="round" // Change to strokeLinecap
                    strokeLinejoin="round" // Change to strokeLinejoin
                />
            </svg>
        </div>
    );
};

const HeaderCategory = ({
    addTodo,
    handleTabClick,
    activeTab,
    handleBlur,
    handleModeSwitch,
    todos,
    nightMode }) => {
    const [show, setShow] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const handleClose = () => {
        setShow(false);
        handleBlur(false);

    }
    const handleShow = () => {
        handleBlur(true);
        setShow(true);
    }
    // const [activeTab, setActiveTab] = useState('all'); // Initialize active tab state
    const [taskName, setTaskName] = useState('');
    const onChange = (e) => setTaskName(e.target.value);
    // const handleTabClick = (tab) => {
    //     setActiveTab(tab);
    // };

    const handleSubmit = () => {
        addTodo(taskName); // Pass taskName to addTodo function
        setShowSuccess(true);
        setTimeout(() => {
            setShow(false);
            setShowSuccess(false);
            handleBlur(false);
        }, 3000);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '10px 20px',
            marginTop: '10px',
            marginBottom: '10px',
            borderRadius: '10px'
        }} className='header-category'>
            <div style={{
                display: 'flex',
                gap: '15px'
            }}>
                <span className={`tabs ${activeTab === 'all' ? 'active' : ''}`}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    onClick={() => handleTabClick('all')} // Call handleTabClick with the tab name
                >
                    <div style={{
                        display: 'flex'
                    }}>
                        All tasks<p>{todos.length}</p>
                    </div>

                    <hr />
                </span>
                <span className={`tabs ${activeTab === 'todo' ? 'active' : ''}`} // Apply active class dynamically
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    onClick={() => handleTabClick('todo')} // Call handleTabClick with the tab name
                >
                    <div style={{
                        display: 'flex'
                    }}>
                        To do <p>{todos.filter(todo => todo.completed === false).length}</p>
                    </div>

                    <hr />
                </span>
                <span className={`tabs ${activeTab === 'completed' ? 'active' : ''}`} // Apply active class dynamically
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    onClick={() => handleTabClick('completed')} // Call handleTabClick with the tab name
                >
                    <div style={{
                        display: 'flex'
                    }}>Completed <p>{todos.filter(todo => todo.completed === true).length}</p></div>
                    <hr />
                </span>
            </div>

            <div style={{
                display: 'flex',
                gap: '10px',
            }}>
                <button
                    style={{
                        cursor: 'pointer',
                        backgroundColor: 'transparent',
                        border: 'none'
                    }}
                    onClick={handleModeSwitch}
                    className="mode-switch active" title="Switch Theme">
                    {nightMode ?
                        <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.1" width="24" height="24" viewBox="0 0 24 24">
                            <defs></defs>
                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                        </svg>
                        : <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
                            <defs></defs>
                            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                        </svg>}

                </button>
                <button className='add-task' onClick={handleShow}>
                    <span>+</span>
                    <span>New Task</span>
                </button>
            </div>
            <Modal className="popup-content" show={show} onHide={handleClose}>
                {!showSuccess && (
                    <div>
                        <Modal.Header className="header-modal">
                            <Modal.Title className="popup-email-title">
                                {" "}
                                Add Task
                            </Modal.Title>
                            <Button
                                style={{
                                    background: 'transparent'
                                }}
                                className="close-button"
                                onClick={handleClose}>
                                <Close />
                            </Button>
                        </Modal.Header>
                        <Modal.Body className="popup-message">
                            {/* Form for task input */}
                            <Form>
                                <Form.Group controlId="formTaskName">
                                    <input
                                        style={{
                                            flex: '10',
                                            padding: '7px',
                                            outline: 'none',
                                            borderRadius: '5px',
                                            width: '80%'
                                        }}
                                        type='text'
                                        name='title'
                                        placeholder='Add new task ...'
                                        value={taskName}
                                        onChange={onChange}
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            {/* Submit button */}
                            <Button
                                style={{
                                    padding: '5px 10px',
                                    marginTop: '10px',
                                    borderRadius: '5px',
                                    minWidth: '30%',
                                    width: 'fit-content'
                                }}
                                variant="primary"
                                className="confirm-button"
                                onClick={handleSubmit}
                            >
                                Confirm
                            </Button>
                        </Modal.Footer>
                    </div>
                )}
                {showSuccess && (
                    <div>
                        <Modal.Body className="popup-message">
                            <div className="success-message-container">
                                <Success className="success-button" />
                                <p>Task added successfully!</p>
                            </div>
                        </Modal.Body>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default HeaderCategory;
