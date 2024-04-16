import './TodoForm.css';
import React from "react";
import {TodoContext} from "../TodoContext/TodoContext";

function TodoForm() {
    const {
        setOpenModal,
        addTodo
    }= React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = (event) =>{
        setOpenModal(false);
    };

    const onChange = (event) =>{
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Cortar la cebolla para el almuerzo"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="TodoForm-button--add">
                    Add</button>
            </div>
        </form>
    );
}

export {TodoForm};