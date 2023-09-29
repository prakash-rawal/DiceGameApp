import React, { useState } from 'react';
import useTodoApi from '../useApi/UseApi'; // Import the custom hook


function TodoApp() {
    const [newTodo, setNewTodo] = useState('');
    const { todos, addTodo, updateTodoChecked, updateTodoTitle, deleteTodo, clearTodos } = useTodoApi();
    const [editTodoId, setEditTodoId] = useState(null);

    const handleEditClick = (id) => {
        // Set the editingTodoId to the ID of the todo being edited
        setEditTodoId(id);
    };

    const handleUpdateClick = (id, updatedTitle) => {
        // Update the todo title and reset the editing state
        updateTodoTitle(id, updatedTitle);
        setEditTodoId(null);
    };

    return (
        <div className='main'>
            <h1>Todo App</h1>
            <input type="text" placeholder="Add a new todo"value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={() => addTodo(newTodo,  setNewTodo(''))}>Add Todo</button>
            <button onClick={clearTodos}>Clear All</button>
            <ul style={{ listStyleType: 'none' }}>
                {todos.map((todo) => (
                    <li key={todo.id} >
                        <input type="checkbox" checked={todo.checked} onChange={() => updateTodoChecked(todo.id, !todo.checked)} />
                        {editTodoId === todo.id ? (
                            <>
                                <input type="text" value={todo.title} onChange={(e) => updateTodoTitle(todo.id, e.target.value)} />
                            </>
                        ) : (
                            <span onClick={() => handleEditClick(todo.id)}>{todo.title}</span>
                        )}
                        <button onClick={() => handleUpdateClick(todo.id, todo.title)}>Update</button>
                        <button onClick={() => deleteTodo(todo.id, todo.checked)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;
