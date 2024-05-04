// import React, { useState } from 'react';

// const AddTodo = ({ addTodo }) => {
//     const [title, setTitle] = useState('');

//     const onChange = (e) => setTitle(e.target.value);

//     const onSubmit = (e) => {
//         e.preventDefault();
//         addTodo(title);
//         setTitle('');
//     };

//     return (
//         <form onSubmit={onSubmit} style={{ display: 'flex' }}>
//             <input
//                 style={{ flex: '10', padding: '5px' }}
//                 type='text'
//                 name='title'
//                 placeholder='Add Todo ...'
//                 value={title}
//                 onChange={onChange}
//             />
//             <input type='submit' value='submit' className='btn' style={{ flex: '1' }} />
//         </form>
//     );
// };


// export default AddTodo;
