import React, { useState } from "react";
import { addNewTodo } from "../redux/action";
import { useDispatch } from 'react-redux';


function TodoForm() {
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text))
    }

    const onInputChange = (e) => {
        setText(e.target.value)
    }
    return (
        <>
            <form onSubmit={onFormSubmit}>
                <input type="text"
                    placeholder="Enter Item Name...."
                    className="Input"
                    onChange={onInputChange}
                />
            </form>
        </>
    )
}
export default TodoForm;