import React from "react";
import {useLocalStorage} from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');

    const serchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    const [openModal, setOpenModal] = React.useState(false);

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false
        });
        saveTodos(newTodos)
    }

    const completeTodo = (text) => {
        const newTodos = [...todos];
        const index= newTodos.findIndex(
            todo => todo.text === text);
        newTodos[index].completed = true;
        saveTodos(newTodos)
    }

    const deleteTodo = (text) => {
        const newTodos = [...todos];
        const index= newTodos.findIndex(
            todo => todo.text === text);
        newTodos.splice(index, 1);
        saveTodos(newTodos)
    }

    return(
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            serchedTodos,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}



export { TodoContext, TodoProvider};