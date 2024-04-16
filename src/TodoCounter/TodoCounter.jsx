import './TodoCounter.css';
import {TodoContext} from "../TodoContext/TodoContext";
import React from "react";

function TodoCounter() {
    const {
        totalTodos: total,
        completedTodos: completed
    } = React.useContext(TodoContext);
    return (
        <h1>
            Has completado <span>{completed}</span> de <span>{total}</span> TODOs
        </h1>
    );
}

export { TodoCounter };